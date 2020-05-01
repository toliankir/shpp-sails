module.exports = {


  friendlyName: 'Show',


  description: 'Show dashboard.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/dashboard'
    },
  },


  fn: async function (inputs) {
    console.log(process.env);
    const { user } = this.req.session;
    const usersCount = await User.count();
    const postsCount = await Post.count();
    return { user, usersCount, postsCount };
  }


};
