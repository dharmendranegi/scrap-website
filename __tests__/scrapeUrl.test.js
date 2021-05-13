const { scrapeUrl } = require("../scrapeUrl/scrapeUrl");
const { urlInput } = require("./testInputs/scrapeUrlTestCases");

// Get scraped details for given url
describe("get scraped details for given url", () => {
  test("[positive] get scraped details for given url", async () => {
    const data = await scrapeUrl(urlInput);
    data.body = JSON.parse(data.body);
    console.log("website data", data);
    expect(data).toHaveProperty("statusCode", 200);
  }, 5000);

  test("[positive] get scraped details for given url with specific meta key", async () => {
    urlInput.filterOgKey = ["ogTitle", "ogType", "description"];
    const data = await scrapeUrl(urlInput);
    data.body = JSON.parse(data.body);
    console.log("website data", data);
    expect(data).toHaveProperty("statusCode", 200);
    expect(data.body).toHaveProperty("Title");
    expect(data.body).toHaveProperty("Type");
  }, 5000);

  test("[Negative] try to get scraped details without providing url key", async () => {
    const data = await scrapeUrl({});
    data.body = JSON.parse(data.body);
    expect(data).toHaveProperty("statusCode", 400);
  }, 5000);

  test("[Negative] try to get scraped details with empty url", async () => {
    const data = await scrapeUrl({ url: "" });
    data.body = JSON.parse(data.body);
    expect(data).toHaveProperty("statusCode", 400);
  }, 5000);
});
