module.exports = {


  friendlyName: 'Roles',


  description: 'Roles something.',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function () {
    return ['user', 'admin'];
  }


};

