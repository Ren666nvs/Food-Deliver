import { users } from "./get-users.js";
import fs from fs
export const createUser = (req, res) => {
  const { name, profile } = req.body;
  const rawUserData = fs.readFileSync('src/db/users.json');
  const users = JSON.parse(rawUserData);

  if (users.some((user) => user.name === name)) {
    return res.status(400).json({ error: "User already exists" });
  }
  if (!name || !profile) {
    return res.status(400).json({ error: "Name and profile are required" });
  }

  users.push({ name, profile });
  res.status(201).json({ message: "User added successfully", users });
};
