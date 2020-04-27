module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const users = await sails.models.user.find({});
    return this.res.view('pages/users', { users });

  }


};
