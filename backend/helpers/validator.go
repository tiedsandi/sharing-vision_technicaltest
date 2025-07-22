package helpers

import (
	"errors"
	"strings"

	"github.com/tiedsandi/sharing-vision_technicaltest/services"
)

func ValidateArticleInput(input services.ArticleRequest, isUpdate bool) error {
	if !isUpdate {
		if len(input.Title) < 20 {
			return errors.New("title must be at least 20 characters")
		}
		if len(input.Content) < 200 {
			return errors.New("content must be at least 200 characters")
		}
		if input.Category == "" {
			return errors.New("category is required")
		}
	}

	input.Status = strings.ToLower(strings.TrimSpace(input.Status))
	validStatuses := map[string]bool{
		"publish": true,
		"draft":   true,
		"trash":   true,
	}

	if !validStatuses[input.Status] {
		return errors.New("status must be one of: publish, draft, or trash")
	}
	return nil
}
