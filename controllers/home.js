// Module dependecies
var page = require(__base + 'libs/page');
var debug = require('debug')('askmegrocery.com:server');

/**
 * Home page controller
 */

/**
* Method for homePage rendering
*/
exports.homePage = function(req, res, next) {
    page.render('index', {
      title: 'AskmeGrocery.com',
      page: 'home'
    }, req, res);
};
