package services

import (
	"github.com/tiedsandi/sharing-vision_technicaltest/config"
	models "github.com/tiedsandi/sharing-vision_technicaltest/model"
)

type ArticleRequest struct {
	Title    string `json:"title" binding:"required"`
	Content  string `json:"content" binding:"required"`
	Category string `json:"category" binding:"required"`
	Status   string `json:"status" binding:"required"`
}

func CreateArticleService(input ArticleRequest) (string, error) {
	article := models.Article{
		Title:    input.Title,
		Content:  input.Content,
		Category: input.Category,
		Status:   input.Status,
	}

	if err := config.DB.Create(&article).Error; err != nil {
		return "", err
	}

	return "success create", nil
}
