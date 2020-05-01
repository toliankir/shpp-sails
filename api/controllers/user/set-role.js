module.exports = {


  friendlyName: 'Set role',


  description: '',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    role: {
      type: 'string',
      required: true,
    }
  },


  exits: {

  },


  fn: async function ({ id, role}) {
    const roles = await sails.helpers.roles();
    const { user } = this.req.session;
    if (user.role !== 'admin') {
      return this.res.forbidden();
    }
    if (roles.indexOf(role) === -1) {
      return this.res.badRequest();
    }
    try {
      await User.updateOne({ id }).set({ role });
    } catch (error) {
      return this.res.view('error/error', { error : error.message });
    }    
    return this.res.redirect('/user');
}


};
