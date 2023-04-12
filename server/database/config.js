const pgp = require("pg-promise")();

// Database connection
const connectionUrl = "postgressql://postgres:kavya@localhost:5432/shoppingcart";
const db = pgp(connectionUrl);

db.any("SELECT * FROM products")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
  
db.any("SELECT * FROM cart_item")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = db;