/* eslint-disable no-param-reassign */
const { scrapeUrl } = require("./scrapeUrl");

const { getInputParams, HttpMethods } = require("../Utils/requestHelper");
const {
  badRequestResponse
} = require("../Utils/responseCodes").responseMessages;

exports.handler = async event => {
  console.log("Input to the lambda-", event);
  console.log("Extracted input params-", getInputParams(event));

  const { body, resource, httpMethod } = getInputParams(event);

  if (httpMethod === HttpMethods.POST && resource === "/scrapeUrl")
    return scrapeUrl(body);

  return badRequestResponse(resource);
};
