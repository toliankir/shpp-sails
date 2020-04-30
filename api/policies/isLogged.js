// policies/isLoggedIn.js
module.exports = async function (req, res, proceed) {
  if (!req.session.user) {
    return res.redirect('/user/login');
  }
  return proceed();
};
