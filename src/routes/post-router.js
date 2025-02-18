// import express from "express";

// export const postsRouter = express.Router();

// const posts = [{ id: 1, title: "First Post", content: "Hello world!" }];

// postsRouter.get("/", (req, res) => {
//   res.json(posts);
// });
// postsRouter.post("/", (req, res) => {
//   const { title, content } = req.body;

//   if (!title || !content) {
//     return res.status(400).json({ error: "Title and content are required" });
//   }
// postsRouter.put("./", (req, res) => {
// res.json(posts)
// })
//   const newPost = { id: posts.length + 1, title, content };
//   posts.push(newPost);
//   res.status(201).json({ message: "Post added successfully", posts });
// });
import express from "express";

export const postsRouter = express.Router();

const posts = [{ id: 1, title: "First Post", content: "Hello world!" }];

postsRouter.get("/", (req, res) => {
  res.json(posts);
});

postsRouter.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);

  res.status(201).json({ message: "Post added successfully", posts });
});

postsRouter.put("/", (req, res) => {
  res.json(posts);
});
