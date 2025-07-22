package config

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	dsn := "root:@tcp(127.0.0.1:3306)/sharing-vision?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("❌ Gagal konek ke database:", err)
	}

	DB = db
	log.Println("✅ Koneksi ke database berhasil")
}

func Migration() {
	// DB.AutoMigrate(
	// 	&models.Department{},
	// )

}
