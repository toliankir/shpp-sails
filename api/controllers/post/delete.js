module.exports = {


  friendlyName: 'Delete',


  description: 'Delete post.',


  inputs: {

  },


  exits: {
    forbidden: {
      description: 'You are not owner of this post, only admins can delete any post.',
      responseType: 'forbidden',
    }
  },


  fn: async function (inputs) {
    const { user } = this.req.session;
    const post = await Post.findOne({ id: this.req.param('id') });
    if (post.owner !== user.id) {
      throw 'forbidden';
    }
    await Post.destroyOne({ id: this.req.param('id') });
    return this.res.redirect('/post');
  }


};
