module.exports = {


  friendlyName: 'Enable',


  description: 'Enable user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await sails.models.user.updateOne({ id: this.req.param('id') }).set({active: true });
    return this.res.redirect('/user');
  }


};
