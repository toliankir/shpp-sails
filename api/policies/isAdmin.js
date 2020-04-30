module.exports = async function (req, res, proceed) {
  if (!req.session.user) {
    return res.forbidden();
  }
  if (req.session.user.role !== 'admin') {
    return res.forbidden();
  }
  return proceed();
};
