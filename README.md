# 📚 Sharing Vision - Technical Test

Aplikasi dashboard artikel dengan fitur **publish**, **draft**, **trash**, dan **preview blog**, dibangun menggunakan **Golang (Gin)** untuk backend dan **React.js** untuk frontend.

---

## 🚀 Cara Menjalankannya

Ikuti langkah-langkah berikut untuk menjalankan aplikasi secara lokal:

### 1. Clone repository

```bash
git clone https://github.com/username/sharing-vision.git
```

### 2. Masuk ke direktori project

```bash
cd sharing-vision
```

### 3. Jalankan backend (terminal pertama)

```bash
cd backend
```

- Pastikan **MySQL** sudah berjalan.
- Buat database dengan nama:

```sql
CREATE DATABASE sharing-vision;
```

- **Note:** Konfigurasi database terdapat di file:
  `config/db.go`

  ```go
  dsn := "root:@tcp(127.0.0.1:3306)/sharing-vision?charset=utf8mb4&parseTime=True&loc=Local"
  ```

  Jika user/password MySQL kamu berbeda, silakan ubah langsung di situ.

- Lalu jalankan backend-nya:

```bash
go run main.go
```

### 4. Jalankan frontend (terminal kedua)

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Akses Aplikasi

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:8080](http://localhost:8080)

---

## 📌 Catatan Tambahan

- Endpoint API mendukung **status-based filtering** (publish, draft, trash) dan **pagination**.
- Halaman **Preview** hanya menampilkan artikel dengan status `publish`, lengkap dengan pagination.
