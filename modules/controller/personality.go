package controller

import (
	"fmt"
	"work/personality-test/modules/connections"

	"github.com/gin-gonic/gin"
	uuid "github.com/satori/go.uuid"
)

func SavePersonality(c *gin.Context) {
	// Bind JSON to map string interface
	personality := make(map[string]interface{})
	if err := c.BindJSON(&personality); err != nil {
		fmt.Println("bind json error", err)
	}

	// Generate unique key
	generator, _ := uuid.NewV4()
	randomID := generator.String()

	data := make(map[string]interface{})
	data[randomID] = personality

	// Connect to firebase db
	conn := connections.FirebaseConnection()
	if err := conn.Update(data); err != nil {
		c.JSON(400, gin.H{
			"response": "put token failed",
		})
	} else {
		c.JSON(200, gin.H{
			"response": "success",
		})
	}
}
