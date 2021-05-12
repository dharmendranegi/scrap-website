/* eslint-disable no-param-reassign,prefer-destructuring,consistent-return */
const axios = require("axios");
const cheerio = require("cheerio");
const { getScrapeDetailsValidation } = require("./validation");

const {
  okResponse,
  badRequestResponse,
  internalServerError
} = require("../Utils/responseCodes").responseMessages;

async function scrapeData(html, keyFilter) {
  const returnValue = {};
  // set a reference to the document that came back
  const $ = cheerio.load(html);

  keyFilter.forEach(key => {
    console.log("key", key);
    const property = `'meta[property ="og:${key}"]'`;
    console.log("property", property);
    console.log("-----", `${$}(${property})`.attr("content"));

    const value = ${$}('meta[property="og:${key}"]').attr("content");
    returnValue[key] = value || "";
  });
  console.log("returnValue", returnValue);
  return returnValue;
}

async function scrapeUrl(event) {
  console.log("Inside scrapeUrl function", event);
  const validationErrors = getScrapeDetailsValidation(event);
  if (validationErrors.length) return badRequestResponse(validationErrors);
  let ogKey = [
    "title",
    "type",
    "image",
    "url",
    "audio",
    "description",
    "determiner",
    "locale",
    "site_name",
    "video",
    "audio"
  ];

  const { url, filterOgKey } = event;
  // checking if explicitly og key are provide or not, if yes then take them as ogKey else default ogKey.
  ogKey = filterOgKey || ogKey;

  return axios
    .get(`${url}`)
    .then(async ({ data }) => {
      console.log("axios response", data);
      return okResponse({ scrapeData: await scrapeData(data, ogKey) });
    })
    .catch(error => {
      console.log("error", error);
      return internalServerError(error);
    });
}

module.exports = {
  scrapeUrl
};
