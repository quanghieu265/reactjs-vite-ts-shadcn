const express = require("express");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: __dirname + "/.env" });
const port = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { errHandler } = require("./middleware/errorMiddleware");
const { authHandler } = require("./middleware/authMiddleware");
const { responseHandler } = require("./middleware/responseMiddleware");
const {
  createUser,
  loginUser,
  logoutUser,
  refreshAccessToken
} = require("./modules/controllers/userController");
const http = require("http");
const app = express();

//SOCKET
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true
  }
});

// MIDDLEWARE
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // middleware for response
app.use(responseHandler);

//PUBLIC ROUTES
app.post("/api/v1/user/signup", createUser);
app.post("/api/v1/user/login", loginUser);
app.post("/api/v1/user/logout", logoutUser);

//AUTH ROUTES
//auth middleware
app.use(authHandler);

// refresh access token
app.get("/api/v1/user/refresh-token", refreshAccessToken);
//user routes
app.use("/api/v1/user", require("./modules/routes/userRoutes"));

// middleware for error
app.use(errHandler);

// SOCKET LISTENERS
io.on("connection", socket => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

//LISTENERS for request from client
server.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
