/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // Set up fake development data (or if we already have some, avast)
  if (await User.count() === 0) {
    await User.createEach([
      { login: 'admin@gmail.com', password: '1', active: true, role: 'admin' },
      { login: 'user@gmail.com', password: '1', active: true, role: 'user' },
    ]);
  }

  if (await Post.count() === 0) {
    const adminId = (await User.findOne({ login: 'admin@gmail.com'})).id;
    const userId = (await User.findOne({ login: 'user@gmail.com'})).id;
    await Post.createEach([
      { title: 'Admin post title', body: 'Admin post.', owner: adminId },
      { title: 'User post title', body: 'User post.', owner: userId },
    ]);
  }

};
