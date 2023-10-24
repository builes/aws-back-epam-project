const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const productsTable = process.env.PRODUCTS_TABLE;

module.exports.getProductsById = async (event) => {
  try {
    const { id } = event.pathParameters;

    const params = {
      TableName: productsTable,
      Key: {
        id: id,
      },
    };

    const result = await dynamoDb.get(params).promise();

    if (!result.Item) {
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
          product: result.Item,
        },
        null,
        2
      ),
    };
  } catch (error) {
    // Manejo de errores
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error interno del servidor." }, null, 2),
    };
  }
};

// const products = require("./products");

// module.exports.getProductsById = async (event) => {
//   try {
//     const { id } = event.pathParameters;

//     const product = products.find((product) => product.id === Number(id));

//     if (!product) {
//       return {
//         statusCode: 404,
//         body: JSON.stringify(
//           {
//             error: "Product not found",
//           },
//           null,
//           2
//         ),
//       };
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify(
//         {
//           product,
//         },
//         null,
//         2
//       ),
//     };
//   } catch (error) {
//     // Manejo de errores
//     console.error("Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Error interno del servidor." }, null, 2),
//     };
//   }
// };
