module.exports = {


  friendlyName: 'Show edit',


  description: '',


  inputs: {

  },


  exits: {
    forbidden: {
      description: 'You are not owner of this post, only admins can edit any post.',
      responseType: 'forbidden',
    }
  },


  fn: async function (inputs) {
    const { user } = this.req.session;
    const post = await Post.findOne({ id: this.req.param('id')});
    if (user.role !== 'admin' && user.id !== post.owner) {
      throw 'forbidden';
    }
    return this.res.view('pages/post/edit', { post, user });
  }


};
