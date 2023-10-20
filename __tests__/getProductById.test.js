const { getProductsById } = require("../handler");

describe("getProductsById", () => {
  it("should return a 200 status code and the product by ID", async () => {
    // Provide a simulated event with a valid ID
    const event = {
      pathParameters: { id: "1" }, // Adjust the ID according to your case
    };
    const response = await getProductsById(event);

    // Verify that the response has a 200 status code
    expect(response.statusCode).toBe(200);

    // Check that the response body contains a product
    const responseBody = JSON.parse(response.body);
    expect(responseBody.product).toBeDefined();
  });

  it("should return a 404 status code for an invalid ID", async () => {
    // Provide a simulated event with an ID that doesn't exist in your test data
    const event = {
      pathParameters: { id: "999" }, // An ID that doesn't exist in your test data
    };
    const response = await getProductsById(event);

    // Verify that the response has a 404 status code
    expect(response.statusCode).toBe(404);

    // Check that the response body contains an error message
    const responseBody = JSON.parse(response.body);
    expect(responseBody.error).toBe("Product not found");
  });
});
