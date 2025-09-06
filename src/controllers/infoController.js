const { StatusCodes } = require("http-status-codes");

const infoController = (req, res) => {
  return res
    .status(StatusCodes.OK)
    .json({ msg: "Ok", success: "true", Error: {}, data: {} });
};

module.exports = { infoController };
