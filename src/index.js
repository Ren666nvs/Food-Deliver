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
import express from "express";
import { usersRouter } from "./router/users-router.js";
import { postsRouter } from "./router/post-router.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
