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
      posts = await sails.models.post.find({});
    } else {
      const { id } = user;
      posts = (await sails.models.user.findOne({id}).populate('posts')).posts;
    }
    return this.res.view('pages/posts', { user, posts });
  }


};
