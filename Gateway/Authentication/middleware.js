let jwt = require("jsonwebtoken");
const config = require("./config.js");
const sendResponse = require("../Response/response");

let checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"]; // Express headers are auto converted to lowercase
  if (token && token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return sendResponse.response(res, 401, "Token is not valid");
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return sendResponse.response(res, 401, "Auth token is not supplied");
  }
};

let generateToken = username => {
  return jwt.sign({ username: username }, config.secret, {
    expiresIn: "24h" // expires in 24 hours
  });
};

module.exports = {
  checkToken: checkToken,
  generateToken: generateToken
};
