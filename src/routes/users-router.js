// import express from 'express';
// import { getUsers } from '../resolvers/users/get-users.js'
// import { createUser} from '../resolvers/users/greate-user.js'
// export const userRoute = express.Router();

// userRouter.get ('./users', getUsers)
// userRouter.post('./users,', createUser)
//
// import express from "express";
// import { getUsers } from "../resolvers/users/get-users.js";
// import { createUser } from "../resolvers/users/create-user.js";

// export const usersRouter = express.Router();

// usersRouter.get("/", getUsers);
// usersRouter.post("/", createUser);
//
import express from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-user.js";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
