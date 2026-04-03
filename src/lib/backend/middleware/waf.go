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
				http.Error(w, "Blocked by WAF", http.StatusForbidden)
				return
			}
		}

		next.ServeHTTP(w, r)
	})
}