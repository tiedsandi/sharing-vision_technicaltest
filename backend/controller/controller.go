package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/tiedsandi/sharing-vision_technicaltest/helpers"
	"github.com/tiedsandi/sharing-vision_technicaltest/services"
)

func CreateArticle(c *gin.Context) {
	var input services.ArticleRequest

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Invalid input data",
			"details": err.Error(),
		})
		return
	}

	if err := helpers.ValidateArticleInput(input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "Validation failed",
			"details": err.Error(),
		})
		return
	}

	res, err := services.CreateArticleService(input)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error":   "Failed to create article",
			"details": err.Error(),
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": res,
	})
}

func GetArticles(c *gin.Context)   {}
func GetArticle(c *gin.Context)    {}
func EditArticle(c *gin.Context)   {}
func DeleteArticle(c *gin.Context) {}
