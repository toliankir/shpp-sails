module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      type: 'string',
      required: true,
    },
    body: {
      type: 'string',
      required: true,
    },
  },


  exits: {

  },


  fn: async function ({ title, body }) {
    const { id: owner} = this.req.session.user;
    await Post.create({ title, body, owner });
    return this.res.redirect('/post');
  }


};
