const errHandler = function (err, req, res, next) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 400;
  res.status(statusCode).json({
    message: err.message
  });
  next();
};

module.exports = { errHandler };
