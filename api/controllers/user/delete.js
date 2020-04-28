module.exports = {


  friendlyName: 'Delete',


  description: 'Delete user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await sails.models.user.destroyOne({ id: this.req.param('id') });
    return this.res.redirect('/user');
  }


};
