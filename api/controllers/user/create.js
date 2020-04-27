module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


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

    // All done.
    await sails.models.user.create(inputs);
    return this.res.redirect('/user');

  }


};
