package controller

import (
	"fmt"
	"work/personality-test/modules/connections"

	"github.com/gin-gonic/gin"
)

func GetUserDISC(c *gin.Context) {
	// Bind JSON to map string interface
	user := make(map[string]interface{})
	if err := c.BindJSON(&user); err != nil {
		fmt.Println("bind json error", err)
	}
	conn := connections.FirebaseConnection()
	var bio map[string]interface{}
	var err error
	if conn, err = conn.Ref(fmt.Sprint(user["id"])); err != nil {
		fmt.Println("ref error")
		c.JSON(400, gin.H{
			"response": "user not exist",
		})
	} else {
		if err = conn.Value(&bio); err != nil || len(bio) <= 0 {
			c.JSON(400, gin.H{
				"response": "put token failed",
			})
		} else {
			c.JSON(200, bio)
		}
	}
}

func SaveDISCLeastResult(c *gin.Context) {
	// Bind JSON to map string interface
	data := make(map[string]interface{})
	if err := c.BindJSON(&data); err != nil {
		fmt.Println("bind json error", err)
	}

	// Connect to firebase db
	conn := connections.FirebaseConnection()
	var err error
	if conn, err = conn.Ref(fmt.Sprint(data["id"])); err != nil {
		fmt.Println("ref error")
		c.JSON(400, gin.H{
			"response": "user not exist",
		})
	} else {
		delete(data, "id")
		if err = conn.Update(data); err != nil {
			c.JSON(400, gin.H{
				"response": "put token failed",
			})
		} else {
			c.JSON(200, gin.H{
				"response": "success",
			})
		}
	}
}
