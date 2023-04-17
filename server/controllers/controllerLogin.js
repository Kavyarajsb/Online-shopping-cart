const db = require("../database/config");

const login = async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try {
        const results = await db.query(
          "SELECT * FROM login WHERE username = $1 AND password = $2",
          [username, password]
        );
      
        if (results && results.length > 0) {
          res.status(200).json({ success: true, message: "Login credentials matched" });
          console.log(results);
        } else {
          res.status(401).json({ error: "Invalid username or password" });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
      }
}

module.exports= {login};