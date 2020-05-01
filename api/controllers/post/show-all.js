module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const { user } = this.req.session;
    let posts = [];
    if (user.role === 'admin') {
      posts = await Post.find({});
    } else {
      const { id } = user;
      posts = (await User.findOne({id}).populate('posts')).posts;
    }
    return this.res.view('pages/post/posts', { user, posts });
  }


};
