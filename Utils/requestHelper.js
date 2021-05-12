// Helper function to extract the query params, body and path params from the input
const getInputParams = event => {
  const { body: requestBody, resource, httpMethod } = event;
  return {
    body: requestBody ? JSON.parse(requestBody) : null,
    resource,
    httpMethod
  };
};

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};

module.exports = { getInputParams, HttpMethods };
