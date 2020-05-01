module.exports = function (data) {
  const { user } = this.req.session;
  return this.res.status(403).view('error/error', { error : 'Forbidden' , user });
};
