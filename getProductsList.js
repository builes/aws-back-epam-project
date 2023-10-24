const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

// Retrieve the DynamoDB table names from environment variables
const productsTable = process.env.PRODUCTS_TABLE;
const stocksTable = process.env.STOCKS_TABLE;

module.exports.getProductsList = async (event) => {
  try {
    // Scan the products table to get the list of products
    const productsResult = await docClient
      .scan({ TableName: productsTable })
      .promise();
    const products = productsResult.Items;

    // Scan the stocks table to get stock information
    const stocksResult = await docClient
      .scan({ TableName: stocksTable })
      .promise();
    const stocks = stocksResult.Items;

    // Combine data from products and stocks into a single result
    const productList = products.map((product) => {
      const stockInfo = stocks.find((stock) => stock.product_id === product.id);
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        count: stockInfo ? stockInfo.count : 0, // Set to 0 if there's no stock information
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ products: productList }, null, 2),
    };
  } catch (error) {
    console.log(error);
    // Handle errors
    return {
      statusCode: 500,
      body: JSON.stringify(
        { message: "Error while retrieving the list of products." },
        null,
        2
      ),
    };
  }
};

//-----------------------------------------------//-----------------------------------------

// const AWS = require("aws-sdk");

// module.exports.getProductList = async (event) => {
//   const dynamoDb = new AWS.DynamoDB.DocumentClient();

//   try {
//     // Escanea la tabla "products" para obtener todos los productos
//     const productsResult = await dynamoDb
//       .scan({
//         TableName: "products",
//       })
//       .promise();

//     const products = productsResult.Items;

//     // Escanea la tabla "stocks" para obtener información de stock
//     const stocksResult = await dynamoDb
//       .scan({
//         TableName: "stocks",
//       })
//       .promise();

//     const stocks = stocksResult.Items;

//     // Combina los datos de productos y stocks para obtener una lista completa de productos
//     const productList = products.map(product => {
//       const stockInfo = stocks.find(stock => stock.product_id === product.id);
//       return {
//         id: product.id,
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         count: stockInfo ? stockInfo.count : 0,
//       };
//     });

//     // Devuelve una respuesta exitosa con la lista de productos
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ products: productList }, null, 2),
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Error interno del servidor.!!!" }, null, 2),
//     };
//   }
// };

//-----------------------------------------------//-----------------------------------------

// module.exports.getProductsList = async (event) => {
//   try {
//     // Aquí está el código original para obtener la lista de productos

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ products }, null, 2),
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
