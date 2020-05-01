module.exports = {


  friendlyName: 'Update',


  description: 'Update post.',


  inputs: {
    title: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string',
      required: true,
    },
    id: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    forbidden: {
      description: 'You are not owner of this post, only admins can update any post.',
      responseType: 'forbidden',
    }
  },


  fn: async function ({ id, body, title}) {
    const { user } = this.req.session;
    const post = await Post.findOne({ id });
    if (user.role !== 'admin' && user.id !== post.owner) {
      throw 'forbidden';
    }
    await Post.updateOne({ id }).set({ title, body});
    return this.res.redirect('/post');

  }


};
