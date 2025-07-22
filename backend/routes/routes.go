package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/tiedsandi/sharing-vision_technicaltest/controller"
)

func ArticleRoutes(router *gin.Engine) {
	router.POST("/article", controller.CreateArticle)
	router.GET("/article")
	router.GET("/article/:id")
	router.PUT("/article/:id")
	router.DELETE("/article/:id")
}
