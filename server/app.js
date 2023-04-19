const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');



const productRouter = require('./routes/routeProduct');
const cartRouter = require('./routes/routeCart');
const loginRouter = require('./routes/routeLogin');



//midddleware
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST","PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json()); //access to get body as json data
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  key: "username",
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:false,
  cookie: { 
    expires: 60 * 60 *24,
   },
  resave: false
}));

app.use('/api', productRouter); // Mount the product router at '/api'
app.use('/cart', cartRouter);
app.use('/main', loginRouter);

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});
