 module.exports = {


  friendlyName: 'Logout',


  description: 'Logout user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    if (this.req.session.user) {
      delete this.req.session.user;
    }
    return this.res.redirect('/user');
  }


};
