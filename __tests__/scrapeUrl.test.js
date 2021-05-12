const { scrapeUrl } = require("../scrapeUrl/scrapeUrl");
const { urlInput } = require("./testInputs/scrapeUrlTestCases");

// Get scraped details for given url
describe("get scraped details for given url", () => {
  test("[positive] get scraped details for given url", async () => {
    const data = await scrapeUrl(urlInput);
    data.body = JSON.parse(data.body);
    console.log("website data", data);
    expect(data).toHaveProperty("statusCode", 200);
    expect(data).toHaveProperty("body.scrapeData");
  }, 3000);

  test("[positive] get scraped details for given url", async () => {
    urlInput.filterOgKey = ["title", "image", "description"];
    const data = await scrapeUrl(urlInput);
    data.body = JSON.parse(data.body);
    console.log("website data", data);
    expect(data).toHaveProperty("statusCode", 200);
    expect(data).toHaveProperty("body.scrapeData", "title");
  }, 3000);
});
