module.exports = function (data) {
  return this.res.status(403).view('error/error', { error : 'Forbidden' });
};
