// import express from "express";
// import { getUsers } from "../resolvers/users/get-users.js";
// import { createUser } from "../resolvers/users/create-user.js";
// import autoprefixer from "autoprefixer";
// import { deleteUser } from "../resolvers/users/delete-user.js";
// import { login } from "../controller/login.js";

// export const usersRouter = express.Router();

// usersRouter.get("/", getUsers);
// usersRouter.post("/", createUser);
// // usersRouter.put('/', authorizationMiddleware, updateUser)
// usersRouter.delete('/',  deleteUser)
// usersRouter.post('/login', login)
import { getUsers } from '../controller/users/get-users.js';
import { createUser } from '../controller/users/create-user.js';
import express from 'express';
import { deleteUser } from '../controller/users/delete-user.js';
import {updateUser} from '../controller/users/update-user.js'
import { login } from '../controller/users/login.js';
import { authorizationMiddleware } from '../middleware/authorization.js';

export const userRouter = express.Router();

userRouter.get('/', authorizationMiddleware, getUsers)
userRouter.post('/', createUser)
userRouter.put('/', authorizationMiddleware, updateUser)
userRouter.delete('/', authorizationMiddleware, deleteUser)
userRouter.post('/login', login)