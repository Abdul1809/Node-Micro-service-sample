const middleware = require("./middleware");
const sendResponse = require("../Response/response");
let login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  // For the given username fetch user from DB
  let mockedUsername = "admin";
  let mockedPassword = "password";

  if (username && password) {
    if (username === mockedUsername && password === mockedPassword) {
      let token = middleware.generateToken(username);
      // return the JWT token for the future API calls
      sendResponse.response(
        res,
        200,
        "Authentication successful!",
        { username, password },
        token
      );
    } else {
      sendResponse.response(res, 403, "Incorrect username or password");
    }
  } else {
    sendResponse.response(
      res,
      400,
      "Authentication failed! Please check the request"
    );
  }
};
let index = (req, res) => {
  sendResponse.response(res, 200, "Auth Verified");
};

module.exports = {
  login: login,
  index: index
};
