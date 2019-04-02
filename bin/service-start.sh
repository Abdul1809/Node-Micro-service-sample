forever start ../Gateway/server.js
echo "Gateway service started";
forever start ../service1/server.js
echo "Service 1 started";
forever start ../service2/server.js
echo "Service 2 started";
