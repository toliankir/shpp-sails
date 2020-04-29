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
    try {
      await sails.models.user.create(inputs);
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }
    return this.res.redirect('/user');
  }


};
