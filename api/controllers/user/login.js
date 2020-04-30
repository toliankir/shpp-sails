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


  fn: async function (inputs) {
    const user = await sails.models.user.findOne({ login: inputs.login });
    if (!user.active) {
      return this.res.view('error/error', { error : `User ${inputs.login} must be activated.` });
    }
    const hashPassword = crypto.createHmac('sha256', 'salt').update(inputs.password).digest('hex');
    if (user.password !== hashPassword) {
      return this.res.view('error/error', { error : `Wrong password or wrong login '${inputs.login}'.` });
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
