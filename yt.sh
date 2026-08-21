q(){ curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" --get --data-urlencode "search_query=$1" "https://www.youtube.com/results"; }
for t in "$@"; do q "$t" | grep -oE '"videoId":"[A-Za-z0-9_-]{11}"' ; done | grep -oE '[A-Za-z0-9_-]{11}"$' | tr -d '"' | sort -u
