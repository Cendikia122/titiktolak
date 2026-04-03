package main

import (
	"fmt"
	"net/http"
	"strings"
)

func waf(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		r.ParseForm()
		input := fmt.Sprintf("%v", r.Form)

		blacklist := []string{
			"<script>",
			"DROP",
			"SELECT",
			"--",
		}

		for _, word := range blacklist {
			if strings.Contains(strings.ToUpper(input), word) {
				http.Error(w, "Blocked by WAF ❌", http.StatusForbidden)
				return
			}
		}

		next.ServeHTTP(w, r)
	})
}

func cors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			return
		}

		next.ServeHTTP(w, r)
	})
}

// ===== API =====
func apiHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("API Golang Aman ✅"))
}

// ===== MAIN =====
func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/data", apiHandler)

	handler := cors(waf(mux))

	fmt.Println("Server jalan di http://localhost:8080")
	http.ListenAndServe(":8080", handler)
}