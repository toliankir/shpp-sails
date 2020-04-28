/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    login: {
      type: 'string',
      required: true
    },
    password : { type: 'string', required: true},
    active: {type: 'boolean', defaultsTo: false},
    role: { type: 'string', defaultsTo: 'user' },
    posts: {
      collection: 'post',
      via: 'owner',
    }
  },

};

