"use strict";

const products = require("./products");

module.exports.getProductList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        products,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getProductsById = async (event) => {
  const { id } = event.pathParameters;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify(
        {
          error: "Product not found",
        },
        null,
        2
      ),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        product,
      },
      null,
      2
    ),
  };
};
