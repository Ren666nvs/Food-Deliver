// import express from "express";
// import { usersRouter } from "./routes/users-router.js";
// import { postsRouter } from "./routes/post-router.js";

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);

// app.get("/api", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
//
//
///

// import express from "express";
// import { usersRouter } from "./routes/users-router.js";
// import { productRouter } from "./routes/product-router.js";

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.use("/users", usersRouter);
// app.use("/products", productsRouter);

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
import express from 'express';
import { userRouter } from './routers/user-router.js';
import { productRouter } from './routers/product-router.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});