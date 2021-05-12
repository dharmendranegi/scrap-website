const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true
};

const okResponse = (body = "success") => ({
  statusCode: 200,
  body: JSON.stringify(body),
  headers
});

const badRequestResponse = data => ({
  statusCode: 400,
  body: JSON.stringify(data),
  headers
});

const internalServerError = data => ({
  statusCode: 500,
  body: JSON.stringify(data),
  headers
});

module.exports.responseMessages = {
  badRequestResponse,
  okResponse,
  internalServerError
};
