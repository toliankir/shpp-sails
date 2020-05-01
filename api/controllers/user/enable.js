module.exports = {


  friendlyName: 'Enable',


  description: 'Enable user.',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    try {
      await User.updateOne({ id: this.req.param('id') }).set({active: true });
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }
    return this.res.redirect('/user');
  }


};
