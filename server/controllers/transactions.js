// @desc Get all tranasactions
// @route GET /api/v1/transactions
// @acess Public

exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @desc Add all tranasactions
// @route POST /api/v1/transactions
// @acess Public

exports.addTransactions = (req, res, next) => {
  res.send("POST transactions");
};

// @desc Delete all tranasactions
// @route DELETE /api/v1/transactions/:id
// @acess Public
exports.deleteTransactions = (req, res, next) => {
  res.send("DELETE transactions");
};
