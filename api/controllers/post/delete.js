module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    await sails.models.post.destroyOne({ id: this.req.param('id') });
    return this.res.redirect('/post');

  }


};
