const AWS = require("aws-sdk");

// Configura el AWS SDK con tus credenciales
AWS.config.update({
  region: "us-east-1", // Cambia a tu región
});

const dynamodb = new AWS.DynamoDB();

const tableNames = ["products", "stocks"];

tableNames.forEach((tableName) => {
  const params = {
    TableName: tableName,
  };

  dynamodb.deleteTable(params, (err, data) => {
    if (err) {
      console.error(`Error al borrar la tabla ${tableName}:`, err);
    } else {
      console.log(`Tabla ${tableName} eliminada con éxito.`, data);
    }
  });
});
