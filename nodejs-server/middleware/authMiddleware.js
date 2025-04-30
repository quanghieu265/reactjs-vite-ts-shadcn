const pool = require("../db.js");
const asyncHandler = require("express-async-handler");
const { jwtVerify } = require("../utils/jwt.utils");

const authHandler = asyncHandler(async (req, res, next) => {
  const nonSecurePaths = ["/api/v1/user/login", "/api/v1/user/refresh-token"];
  if (nonSecurePaths.includes(req.path)) return next();

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwtVerify(token);
    const user = await pool.query(
      "SELECT id, username, email FROM users WHERE id = $1",
      [decoded.id]
    );
    req.user = user.rows[0];
    next();
  } catch (err) {
    res.status(401);
    throw new Error("Invalid or expired token");
  }
});

module.exports = { authHandler };
