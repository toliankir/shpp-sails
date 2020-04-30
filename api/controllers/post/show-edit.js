module.exports = {


  friendlyName: 'Show edit',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    const post = await sails.models.post.findOne({ id: this.req.param('id')});
    return this.res.view('pages/postedit', { post });

  }


};
