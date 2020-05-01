module.exports = {


  friendlyName: 'Delete',


  description: 'Delete user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    try {
      await User.destroyOne({ id: this.req.param('id') });
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }
    return this.res.redirect('/user');
  }


};
