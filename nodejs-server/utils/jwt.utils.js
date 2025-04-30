const jwt = require("jsonwebtoken");

const jwtVerify = token => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (e) {
    return null;
  }
};

const generateToken = (payload, exp) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: exp });
};

module.exports = {
  jwtVerify,
  generateToken
};
