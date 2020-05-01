module.exports = {


  friendlyName: 'Show signup',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const { user } = this.req.session;
    return this.res.view('pages/user/signup', { user });
  }


};
