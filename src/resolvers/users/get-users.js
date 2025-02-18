import { keyboard } from "@testing-library/user-event/dist/keyboard";
import fs from fs;
export const getUsers = (req, res) => {

const users = fs.readFileSync('src/db/useers.json')

  res.send(JSON.parse(users));
}