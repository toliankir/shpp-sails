module.exports = function (data) {
  if (data.code === 'E_MISSING_OR_INVALID_PARAMS') {
    return this.res.view('error/error', { error : data.problems });
  }
  return this.res.status(400).json(data);
};
