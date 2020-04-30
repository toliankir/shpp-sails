module.exports = {


  friendlyName: 'Show login',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const { user } = this.req.session;
    return this.res.view('pages/login', { user });

  }


};
