const { StatusCodes } = require("http-status-codes");

function validcreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Failed to create the Airplane",
      data: {},
      error: {
        explanation: "Model Number was not found in the incoming Request",
      },
    });
  }
  next();
}

module.exports = {
  validcreateRequest,
};
