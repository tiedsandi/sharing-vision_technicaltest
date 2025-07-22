package services

import (
	"errors"

	"github.com/tiedsandi/sharing-vision_technicaltest/config"
	models "github.com/tiedsandi/sharing-vision_technicaltest/model"
)

type ArticleRequest struct {
	Title    string `json:"title"`
	Content  string `json:"content"`
	Category string `json:"category"`
	Status   string `json:"status"`
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

func GetArticlesService(limit int, offset int, status string) ([]models.Article, int64, error) {
	var articles []models.Article
	var total int64

	query := config.DB.Model(&models.Article{}).Where("status = ?", status)

	if err := query.Count(&total).Error; err != nil {
		return nil, 0, err
	}

	if err := query.
		Order("created_date DESC").
		Limit(limit).
		Offset(offset).
		Find(&articles).Error; err != nil {
		return nil, 0, err
	}

	return articles, total, nil
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

	if input.Title != "" {
		article.Title = input.Title
	}
	if input.Content != "" {
		article.Content = input.Content
	}
	if input.Category != "" {
		article.Category = input.Category
	}
	if input.Status != "" {
		article.Status = input.Status
	}

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
