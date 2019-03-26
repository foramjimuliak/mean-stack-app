module.exports = (app) => {

    const users = require('../controller/user.controller.js');

    /**
    * @api {post} /api/search Search user
    * @apiName Search users
    * @apiSuccess (200) {Object} mixed `User` object
    */
    app.post('/api/search',users.search);

    /**
    * @api {post} /api/auth Authenticate user
    * @apiName Login user
    */
   app.post('/api/auth',users.login);

}