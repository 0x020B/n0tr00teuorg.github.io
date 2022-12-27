'use strict';

const BaseDreamHostModule = require('./base.js');

/**
 * ModuleName module
 *
 * @constructor
 * @param {Object} options
 * @param {String} options.key - DreamHost API Key
 * @param {String} [options.api=https://api.dreamhost.com/] DreamHost API URL
 */
class User extends BaseDreamHostModule {
 /**
 * user-add_user
 *
 * @param {Object} params
 * @param {String} params.type
 * @param {String} params.username
 * @param {String} params.gecos
 * @param {String} [params.server]
 * @param {String} [params.shell_type]
 * @param {String} [params.password]
 * @param {String} [params.enhanced_security]
 * @return {Promise}
 */
 addUser(params) {
  return this.request('user-add_user', params);
 }

 /**
 * user-list_users
 *
 * @return {Promise<Array>}
 */
 listUsers() {
  return this.request('user-list_users');
 }

 /**
 * user-list_users_no_pw
 *
 * @return {Promise<Array>}
 */
 listUsersNoPw() {
  return this.request('user-list_users_no_pw');
 }

 /**
 * user-remove_user
 *
 * @param {Object} params
 * @param {String} params.username
 * @param {String} [params.type]
 * @param {String} [params.remove_all]
 * @return {Promise}
 */
 removeUser(params) {
  return this.request('user-remove_user', params);
 }
}

module.exports = User;
