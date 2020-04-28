module.exports = {


  friendlyName: 'Disable',


  description: 'Disable user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await sails.models.user.updateOne({ id: this.req.param('id') }).set({active: false });
    return this.res.redirect('/user');
  }


};
