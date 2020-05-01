module.exports = function (data) {
  if (data.code === 'E_MISSING_OR_INVALID_PARAMS') {
    const { user } = this.req.session;
    return this.res.view('error/error', { error : data.problems , user});
  }
  return this.res.status(400).json(data);
};
