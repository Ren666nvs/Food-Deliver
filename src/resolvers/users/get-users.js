// import { keyboard } from "@testing-library/user-event/dist/keyboard";
// import fs from fs;
// export const getUsers = (req, res) => {

// const users = fs.readFileSync('src/db/useers.json')

//   res.send(JSON.parse(users));
// }
import fs from "fs";

export const getUsers = (req, res) => {
  try {
    const users = fs.readFileSync("src/db/users.json");
    res.json(JSON.parse(users));
  } catch (error) {
    res.status(500).json({ error: "Error reading users data" });
  }
};
