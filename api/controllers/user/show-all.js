module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {
  },


  fn: async function (inputs) {
    try {
      const users = await User.find({});
      const { user } = this.req.session;
      const roles = await sails.helpers.roles();
      return this.res.view('pages/user/users', { users, user, roles });
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }
  }


};
