package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/tiedsandi/sharing-vision_technicaltest/controller"
)

func ArticleRoutes(router *gin.Engine) {
	router.POST("/article", controller.CreateArticle)
	router.GET("/article", controller.GetArticles)
	router.GET("/article/:id", controller.GetArticle)
	router.PUT("/article/:id", controller.EditArticle)
	router.DELETE("/article/:id", controller.DeleteArticle)

}
