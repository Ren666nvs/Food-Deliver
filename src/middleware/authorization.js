// export const authenticate = (req, res, next) => {
//     const { token } = req.headers;

//     if (!token) {
//       return res.status(401).json({ error: "Unauthorized: No token provided" });
//     }

//     next();
//   };
import jwt from "jsonwebtoken";

export const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.json({ message: "unauthorized!!!" });

  const token = authorization.split(" ")[1];

  try {
    jwt.verify(token, "secret");
    next();
  } catch (err) {
    console.log(token);
    console.log(err);
    return res.json({ message: "unauthorized!!!" });
  }
};

// 1. Create login => return token
// 2. Send login request from postman => get token
// 3. Put token in header of new request from postman(thunder)
// 4. Write authorizationMiddleware
// 5. Check token on middleware
// 6. Put authorizationMiddleware on getUsers
