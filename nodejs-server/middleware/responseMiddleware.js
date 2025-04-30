const responseHandler = function (req, res, next) {
  const originalSend = res.send;
  res.send = function (response) {
    const status = res.statusCode;
    const payload = {};
    payload.success = status >= 200 && status < 300 ? true : false;
    payload.status = status;
    if (payload.success) {
      payload.data = JSON.parse(response);
    } else {
      let errMessage = JSON.parse(response);
      payload.message = errMessage?.message;
    }
    arguments[0] = JSON.stringify(payload);
    originalSend.apply(res, arguments);
  };
  next();
};

module.exports = { responseHandler };
