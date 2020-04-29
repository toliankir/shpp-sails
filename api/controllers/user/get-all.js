module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const users = await sails.models.user.find({});
    // const test = await sails.models.user.find({}).populate('posts');
    // console.log(this.req.session.user);
    const { user } = this.req.session;
    console.log(user);
    // console.log(process.env.salt);
    return this.res.view('pages/users', { users, user });
  }


};
