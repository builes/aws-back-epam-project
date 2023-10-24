"use strict";

const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Get the products table name from environment variables
const productsTable = process.env.PRODUCTS_TABLE;

// Lambda function to create a new product
module.exports.createProduct = async (event) => {
  try {
    // Parse the JSON body from the event
    const { id, title, description, price } = JSON.parse(event.body);

    // Check if all required fields are present
    if (!id || !title || !description || !price) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }, null, 2),
      };
    }

    // Create a product object
    const product = {
      id,
      title,
      description,
      price,
    };

    // Define parameters for putting the product into the DynamoDB table
    const params = {
      TableName: productsTable,
      Item: product,
    };

    // Put the product into the table
    await dynamoDb.put(params).promise();

    // Return a success response with the created product
    return {
      statusCode: 201,
      body: JSON.stringify(
        {
          product,
        },
        null,
        2
      ),
    };
  } catch (error) {
    // Error handling
    console.error("Error:", error);

    // Return an internal server error response in case of an error
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: "Internal server error.!!!",
        },
        null,
        2
      ),
    };
  }
};
