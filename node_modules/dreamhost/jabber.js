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
class Jabber extends BaseDreamHostModule {
 /**
 * jabber-add_user
 *
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.domain
 * @param {String} params.password
 * @return {Promise}
 */
 addUser(params) {
  return this.request('jabber-add_user', params);
 }

 /**
 * jabber-deactivate_user
 *
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.domain
 * @return {Promise}
 */
 deactivateUser(params) {
  return this.request('jabber-deactivate_user', params);
 }

 /**
 * jabber-list_users
 *
 * @return {Promise<Array>}
 */
 listUsers() {
  return this.request('jabber-list_users');
 }

 /**
 * jabber-list_users_no_pw
 *
 * @return {Promise<Array>}
 */
 listUsersNoPw() {
  return this.request('jabber-list_users_no_pw');
 }

 /**
 * jabber-list_valid_domains
 *
 * @return {Promise<Array>}
 */
 listValidDomains() {
  return this.request('jabber-list_valid_domains');
 }

 /**
 * jabber-reactivate_user
 *
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.domain
 * @return {Promise}
 */
 reactivateUser(params) {
  return this.request('jabber-reactivate_user', params);
 }

 /**
 * jabber-remove_user
 *
 * @param {Object} params
 * @param {String} params.username
 * @param {String} params.domain
 * @return {Promise}
 */
 removeUser(params) {
  return this.request('jabber-remove_user', params);
 }
}

module.exports = Jabber;
