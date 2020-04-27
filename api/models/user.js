module.exports = {
  attributes: {
    login: {
      type: 'string',
      required: true
    },
    password : { type: 'string', required: true},
    role: { type: 'string', defaultsTo: 'user' }
  },
};
