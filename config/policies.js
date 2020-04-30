/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': false,
  'user/show-all': ['isLogged', 'isAdmin'],
  'user/enable': 'isAdmin',
  'user/disable': 'isAdmin',
  'user/delete': 'isAdmin',
  'user/create': true,
  'user/show-signup': true,
  'user/show-login': true,
  'user/login': true,
  'user/logout': 'isLogged',
  'post/show-all': 'isLogged',
  'post/create': 'isLogged',
  'post/unpublish': 'isAdmin',
  'post/publish': 'isAdmin',
  'post/delete': 'isAdmin',
};
