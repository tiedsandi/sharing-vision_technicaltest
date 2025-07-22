package services

import (
	"errors"

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

func GetArticlesService(limit int, offset int) ([]models.Article, error) {
	var articles []models.Article

	if err := config.DB.
		Order("created_date DESC").
		Limit(limit).Offset(offset).
		Find(&articles).Error; err != nil {
		return nil, err
	}

	return articles, nil
}

func GetArticleService(id int) (*models.Article, error) {
	var article models.Article
	if err := config.DB.First(&article, id).Error; err != nil {
		return nil, errors.New("article not found")
	}
	return &article, nil
}

func UpdateArticleService(id int, input ArticleRequest) error {
	var article models.Article
	if err := config.DB.First(&article, id).Error; err != nil {
		return errors.New("article not found")
	}

	article.Title = input.Title
	article.Content = input.Content
	article.Category = input.Category
	article.Status = input.Status

	if err := config.DB.Save(&article).Error; err != nil {
		return err
	}
	return nil
}

func DeleteArticleService(id int) error {
	var article models.Article
	if err := config.DB.First(&article, id).Error; err != nil {
		return errors.New("article not found")
	}

	if err := config.DB.Delete(&article).Error; err != nil {
		return err
	}
	return nil
}
