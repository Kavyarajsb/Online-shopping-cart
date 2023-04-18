const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const sessions = require('express-session');



const productRouter = require('./routes/routeProduct');
const cartRouter = require('./routes/routeCart');
const loginRouter = require('./routes/routeLogin');

const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

//midddleware
app.use(cors());
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', productRouter); // Mount the product router at '/api'
app.use('/cart', cartRouter);
app.use('/main', loginRouter);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
