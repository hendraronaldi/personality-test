package connections

import (
	"fmt"
	"io/ioutil"
	"os"

	"github.com/zabawaba99/firego"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
)

func FirebaseConnection() *firego.Firebase {
	var configJSON []byte
	var err error
	if configJSONString := os.Getenv("firebase-auth"); configJSONString != "" {
		configJSON = []byte(configJSONString)
	} else {
		configJSON, err = ioutil.ReadFile("utilities/firebase-config.json")
		if err != nil {
			fmt.Println("read file err", err)
			return nil
		}
	}

	conf, err := google.JWTConfigFromJSON(configJSON, "https://www.googleapis.com/auth/userinfo.email",
		"https://www.googleapis.com/auth/firebase.database")
	if err != nil {
		fmt.Println("jwt config error", err)
		return nil
	}

	fb := firego.New("https://turnout-911c3.firebaseio.com/", conf.Client(oauth2.NoContext))
	return fb
}
