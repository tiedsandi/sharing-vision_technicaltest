package helpers

import (
	"errors"
	"strings"

	"github.com/tiedsandi/sharing-vision_technicaltest/services"
)

func ValidateArticleInput(input services.ArticleRequest) error {

	if strings.TrimSpace(input.Title) == "" || len(input.Title) < 20 {
		return errors.New("title is required and must be at least 20 characters")
	}

	if strings.TrimSpace(input.Content) == "" || len(input.Content) < 200 {
		return errors.New("content is required and must be at least 200 characters")
	}

	if strings.TrimSpace(input.Category) == "" || len(input.Category) < 3 {
		return errors.New("category is required and must be at least 3 characters")
	}

	input.Status = strings.ToLower(strings.TrimSpace(input.Status))
	validStatuses := map[string]bool{
		"publish": true,
		"draft":   true,
		"thrash":  true,
	}

	if !validStatuses[input.Status] {
		return errors.New("status must be one of: publish, draft, or thrash")
	}

	return nil
}
