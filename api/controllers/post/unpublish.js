module.exports = {


  friendlyName: 'Unpublish',


  description: 'Unpublish post.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    await Post.updateOne({ id: this.req.param('id')}).set({active: false});
    return this.res.redirect('/post');
  }


};
