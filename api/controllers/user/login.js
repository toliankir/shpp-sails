const crypto = require('crypto');
module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    login: {
      type: 'string',
      isEmail: true,
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function ({login, password}) {
    let user = {};
    try {
      user = await User.findOne({ login });
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }
    if (user === undefined) {
      return this.res.view('error/error', { error : `'${login}' doesn't exists.` });
    }
    if (!user.active) {
      return this.res.view('error/error', { error : `User ${login} must be activated.` });
    }
    const hashPassword = crypto.createHmac('sha256', sails.config.salt)
      .update(password)
      .digest('hex');
    if (user.password !== hashPassword) {
      return this.res.view('error/error', { error : `Wrong password or wrong login '${login}'.` });
    }
    this.req.session.user = {
      user: user.login,
      role: user.role,
      id: user.id,
    };

    if (user.role === 'admin') {
      return this.res.redirect('/user');
    }
    return this.res.redirect('/post');
  }

};
