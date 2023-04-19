const db = require("../database/config");
const session = require ("../app")

const login = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try {
        const results = await db.query(
          "SELECT * FROM login WHERE username = $1 AND password = $2",
          [username, password]
        );
      
        if (results && results.length > 0) {
          req.session.user = results;
          res.status(200).json({ success: true, message: "Login credentials matched" });
          console.log(req.session.user);
          console.log(results);
        } else {
          res.status(401).json({ error: "Invalid username or password" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
      }
}

const loginsession = async (req,res)=>{
  if (req.session.user){
    req.send({loggedIn: true, user: req.session.user})
  } else{
    res.send({loggedIn: false})
  }
}

module.exports= {login, loginsession};