module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const users = await sails.models.user.find({});
    const test = await sails.models.user.find({}).populate('posts');
    console.log(test[0]);
    return this.res.view('pages/users', { users });

  }


};
