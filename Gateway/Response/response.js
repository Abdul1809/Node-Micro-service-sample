/**
 * Common response generator with status and message
 */
var response = (res, status, message) => {
  res.json({
    status,
    message
  });
};

/**
 * Common response generator with status, message and data
 */
var response = (res, status, message, data) => {
  res.json({
    status,
    message,
    data
  });
};

/**
 * Common response generator with status, message, data and token
 */
var response = (res, status, message, data, token) => {
  res.json({
    status,
    message,
    data,
    token
  });
};

/**
 * Exporting common response for the module
 */
module.exports = {
  response
};
