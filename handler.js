"use strict";

module.exports.getProductList = async (event) => {
  const products = [
    {
      id: 1,
      Product: "Smartphone",
      Name: "iPhone 13 Pro",
      Manufacturer: "Apple Inc.",
      Price: "$999",
    },
    {
      id: 2,
      Product: "Laptop",
      Name: "MacBook Air",
      Manufacturer: "Apple Inc.",
      Price: "$999",
    },
    {
      id: 3,
      Product: "Smartwatch",
      Name: "Apple Watch Series 7",
      Manufacturer: "Apple Inc.",
      Price: "$399",
    },
    {
      id: 4,
      Product: "Gaming Console",
      Name: "PlayStation 5",
      Manufacturer: "Sony Interactive Entertainment",
      Price: "$499",
    },
    {
      id: 5,
      Product: "Tablet",
      Name: "iPad Pro",
      Manufacturer: "Apple Inc.",
      Price: "$799",
    },
    {
      id: 6,
      Product: "Smart Speaker",
      Name: "Amazon Echo Dot (4th Gen)",
      Manufacturer: "Amazon",
      Price: "$49.99",
    },
    {
      id: 7,
      Product: "Wireless Headphones",
      Name: "Sony WH-1000XM4",
      Manufacturer: "Sony",
      Price: "$349.99",
    },
    {
      id: 8,
      Product: "Digital Camera",
      Name: "Canon EOS 90D",
      Manufacturer: "Canon",
      Price: "$1199",
    },
    {
      id: 9,
      Product: "4K TV",
      Name: "LG OLED C1 Series",
      Manufacturer: "LG",
      Price: "$1499",
    },
    {
      id: 10,
      Product: "Router",
      Name: "NETGEAR Nighthawk AX12",
      Manufacturer: "NETGEAR",
      Price: "$399",
    },
  ];

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
