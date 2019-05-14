package main

import (
	"fmt"
	"os"
	"runtime"
	"work/personality-test/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	ConfigRuntime()
	StartGin()
}

func ConfigRuntime() {
	nuCPU := runtime.NumCPU()
	runtime.GOMAXPROCS(nuCPU)
	fmt.Printf("Running with %d CPUs\n", nuCPU)
	fmt.Println("this apps working completly fine on environment", os.Getenv("DOT_ENV"))
}

func StartGin() {
	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	router.Use(routes.CORSMiddleware())
	routes.SetupRouter(router)
	if os.Getenv("port") == "default" {
		router.Run()
	} else {
		router.Run(":8000") //port for localhost:8000
	}
}
