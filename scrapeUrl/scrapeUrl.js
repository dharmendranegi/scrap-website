/* eslint-disable no-param-reassign,prefer-destructuring,consistent-return */
const ogs = require("open-graph-scraper");
const { getScrapeDetailsValidation } = require("./validation");

const {
  okResponse,
  badRequestResponse,
  internalServerError
} = require("../Utils/responseCodes").responseMessages;

async function scrapeUrl(event) {
  console.log("Inside scrapeUrl function", event);
  const validationErrors = getScrapeDetailsValidation(event);
  if (validationErrors.length) return badRequestResponse(validationErrors);
  let ogKey = [
    "ogTitle",
    "ogType",
    "ogImage",
    "ogUrl",
    "ogAudio",
    "ogDescription",
    "ogDeterminer",
    "ogLocale",
    "ogSite_name",
    "ogVideo",
    "ogAudio"
  ];

  const { url, filterOgKey } = event;

  ogKey = filterOgKey || ogKey;

  const customMetaTags = [];
  // creating input for custom meta tags
  ogKey.forEach(key => {
    customMetaTags.push({
      multiple: false,
      property: key,
      fieldName: key
    });
  });

  return ogs({ url, customMetaTags })
    .then(data => {
      const returnData = {};
      const { result } = data;
      ogKey.forEach(key => {
        if (key in result) returnData[key.substring(2)] = result[key];
      });
      return okResponse(returnData);
    })
    .catch(error => {
      console.log("error", error);
      return internalServerError(error);
    });
}

module.exports = {
  scrapeUrl
};
