python3 -m http.server &
SERVER_PID=$!
sleep 1
node render.js
kill -9 $SERVER_PID