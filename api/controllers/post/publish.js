module.exports = {


  friendlyName: 'Publish',


  description: 'Publish post.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    await Post.updateOne({ id: this.req.param('id')}).set({active: true});
    return this.res.redirect('/post');

  }


};
