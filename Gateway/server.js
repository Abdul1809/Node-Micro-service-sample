const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const httpProxy = require("http-proxy");
/**
 * User-defined middleware configurations
 */
let middleware = require("./Authentication/middleware");
let config = require("../config.json");
let authGenerator = require("./Authentication/authGenerator");

/**
 * Assigning port and creating proxy for the microservices
 */
let port = config.port.gatewayService;
let apiProxy = httpProxy.createProxyServer();

let serverOne = config.url + config.port.service1,
  ServerTwo = config.url + config.port.service2;

app.use(
  bodyParser.urlencoded({
    // Middleware
    extended: true
  })
);
app.use(bodyParser.json());
// Routes & Handlers
app.post("/login", authGenerator.login);
app.get("/", middleware.checkToken, authGenerator.index);

// service 1 routing defined here
app.all(config.serviceUrl.service1, middleware.checkToken, function(req, res) {
  console.log("redirecting to Server1");
  apiProxy.web(req, res, { target: serverOne });
});

// service 2 routing defined here
app.all(config.serviceUrl.service2, middleware.checkToken, function(req, res) {
  console.log("redirecting to Server2");
  apiProxy.web(req, res, { target: ServerTwo });
});

// Listen to the port defined in configuration file
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
