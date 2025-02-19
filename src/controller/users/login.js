// export const login = (req,res) => {
//     const {username, password } = req.body;
//     const rawUserData = fs.readFileSync( 'src/db/users.json');
//     const users = JSON.parse(rawUserData);
//     const user = user.find((cur) => cur.username === username);
//     if(!user) return res.json({message: "Username or Password did not match"})
//         if(!user.password != password) return res.json({ message: "Username or Password did not match"})
//             var token = jvt.sign(user, 'secret')
//     res.json({ token: token})
//  }
import fs from "fs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { username, password } = req.body;

  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  const user = users.find((cur) => cur.username === username);

  console.log("1");
  if (!user) return res.json({ message: "Username or Password did not match" });
  console.log("2");
  if (user.password !== password)
    return res.json({ message: "Username or Password did not match" });
  console.log("3");

  var token = jwt.sign(user, "secret");

  return res.json({ token: token });
};

// jwt, middleware
