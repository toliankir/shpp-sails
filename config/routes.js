/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { action: 'dashboard/show' },
  'GET /user': { action: 'user/show-all' },
  'GET /user/enable/:id': { action: 'user/enable' },
  'GET /user/disable/:id': { action: 'user/disable' },
  'GET /user/delete/:id': { action: 'user/delete' },
  'POST /user': { action: 'user/create' },
  'GET /user/signup': {action: 'user/show-signup'},
  'GET /user/login': { action: 'user/show-login' },
  'POST /user/login': { action: 'user/login' },
  'POST /user/role': { action: 'user/set-role' },
  'GET /user/logout': { action: 'user/logout' },

  'GET /post': { action: 'post/show-all' },
  'POST /post': {action: 'post/create'},
  'GET /post/edit/:id': {action: 'post/show-edit'},
  'POST /post/update': {action: 'post/update'},
  'GET /post/unpublish/:id': { action: 'post/unpublish' },
  'GET /post/publish/:id': { action: 'post/publish' },
  'GET /post/delete/:id': { action: 'post/delete' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
