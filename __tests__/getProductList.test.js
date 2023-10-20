const { getProductList } = require("../handler");

describe("getProductList", () => {
  it("should return a 200 status code and the list of products", async () => {
    const event = {};

    // provide a simulated event object as needed
    const response = await getProductList(event);

    // Verify that the response has a 200 status code
    expect(response.statusCode).toBe(200);

    // Check that the response body is a valid JSON string
    const responseBody = JSON.parse(response.body);
    expect(responseBody.products).toBeDefined();
    expect(Array.isArray(responseBody.products)).toBe(true);
  });
});
