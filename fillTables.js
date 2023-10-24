"use strict";

const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-1" });

// Crea una instancia del servicio DynamoDB
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const productsData = [
  {
    id: "1",
    title: "Product 1",
    description: "Description of Product 1",
    price: 10,
  },
  {
    id: "2",
    title: "Product 2",
    description: "Description of Product 2",
    price: 15,
  },
  {
    id: "3",
    title: "Product 3",
    description: "Description of Product 3",
    price: 20,
  },
  {
    id: "4",
    title: "Product 4",
    description: "Description of Product 4",
    price: 25,
  },
  {
    id: "5",
    title: "Product 5",
    description: "Description of Product 5",
    price: 30,
  },
  {
    id: "6",
    title: "Product 6",
    description: "Description of Product 6",
    price: 35,
  },
  {
    id: "7",
    title: "Product 7",
    description: "Description of Product 7",
    price: 40,
  },
  {
    id: "8",
    title: "Product 8",
    description: "Description of Product 8",
    price: 45,
  },
  {
    id: "9",
    title: "Product 9",
    description: "Description of Product 9",
    price: 50,
  },
  {
    id: "10",
    title: "Product 10",
    description: "Description of Product 10",
    price: 55,
  },
];

const stocksData = [
  {
    product_id: "1",
    count: 100,
  },
  {
    product_id: "2",
    count: 50,
  },
  {
    product_id: "3",
    count: 75,
  },
  {
    product_id: "4",
    count: 30,
  },
  {
    product_id: "5",
    count: 120,
  },
  {
    product_id: "6",
    count: 90,
  },
  {
    product_id: "7",
    count: 80,
  },
  {
    product_id: "8",
    count: 40,
  },
  {
    product_id: "9",
    count: 60,
  },
  {
    product_id: "10",
    count: 25,
  },
];

// Función para cargar datos en la tabla de productos
const fillProductsTable = () => {
  productsData.forEach((product) => {
    const params = {
      TableName: "products", // Nombre de tu tabla de productos
      Item: product,
    };

    dynamoDB.put(params, (err, data) => {
      if (err) {
        console.error("Error al agregar producto:", err);
      } else {
        console.log("Producto agregado:", product);
      }
    });
  });
};

// Función para cargar datos en la tabla de stocks
const fillStocksTable = () => {
  stocksData.forEach((stock) => {
    const params = {
      TableName: "stocks", // Nombre de tu tabla de stocks
      Item: stock,
    };

    dynamoDB.put(params, (err, data) => {
      if (err) {
        console.error("Error al agregar stock:", err);
      } else {
        console.log("Stock agregado:", stock);
      }
    });
  });
};

// Ejecuta las funciones para llenar las tablas
fillProductsTable();
fillStocksTable();
