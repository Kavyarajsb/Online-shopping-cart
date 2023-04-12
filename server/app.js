const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const productRouter = require('./routes/routeProduct');
const cartRouter = require('./routes/routeCart');

//midddleware
app.use(cors());
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', productRouter); // Mount the product router at '/api'
app.use('/cart', cartRouter);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
