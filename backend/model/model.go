package model

import "time"

type Article struct {
	ID          int       `gorm:"primaryKey;autoIncrement" json:"id"`
	Title       string    `gorm:"type:varchar(200)" json:"title"`
	Content     string    `gorm:"type:text" json:"content"`
	Category    string    `gorm:"type:varchar(100)" json:"category"`
	CreatedDate time.Time `gorm:"autoCreateTime" json:"created_date"`
	UpdatedDate time.Time `gorm:"autoUpdateTime" json:"updated_date"`
	Status      string    `gorm:"type:varchar(100)" json:"status"`
}
