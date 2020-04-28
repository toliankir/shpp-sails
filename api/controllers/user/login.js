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

    this.req.session.user = {
      user: inputs.login
    };
    // All done.
    return;

  }


};
