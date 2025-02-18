// import { users } from "./get-users.js";
// import fs from fs
// export const createUser = (req, res) => {
//   const { name, profile } = req.body;
//   const rawUserData = fs.readFileSync('src/db/users.json');
//   const users = JSON.parse(rawUserData);

//   if (users.some((user) => user.name === name)) {
//     return res.status(400).json({ error: "User already exists" });
//   }
//   if (!name || !profile) {
//     return res.status(400).json({ error: "Name and profile are required" });
//   }

//   users.push({ name, profile });
//   res.status(201).json({ message: "User added successfully", users });
// };
import fs from "fs";

export const createUser = (req, res) => {
  const { name, username, password } = req.body;
  if (!name || !username || !password) {
    return res.status(400).json({ error: "Name, username, and password are required" });
  }

  const rawUserData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(rawUserData);

  if (users.some((user) => user.name === name)) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = { id: users.length + 1, name, username, password };
  users.push(newUser);

  fs.writeFileSync("src/db/users.json", JSON.stringify(users, null, 2));
  
  res.status(201).json({ message: "User added successfully", users });
};
