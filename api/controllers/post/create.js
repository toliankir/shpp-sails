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


  fn: async function (inputs) {
    const { title, body } = inputs;
    const { id: owner} = this.req.session.user;
    await sails.models.post.create({ title, body, owner });
    return this.res.redirect('/post');
  }


};
