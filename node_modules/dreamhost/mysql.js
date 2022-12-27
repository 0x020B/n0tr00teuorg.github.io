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
class Mysql extends BaseDreamHostModule {
 /**
 * mysql-add_hostname
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 addHostname(params) {
  return this.request('mysql-add_hostname', params);
 }

 /**
 * mysql-add_user
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 addUser(params) {
  return this.request('mysql-add_user', params);
 }

 /**
 * mysql-list_dbs
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listDbs(params) {
  return this.request('mysql-list_dbs', params);
 }

 /**
 * mysql-list_hostnames
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listHostnames(params) {
  return this.request('mysql-list_hostnames', params);
 }

 /**
 * mysql-list_users
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listUsers(params) {
  return this.request('mysql-list_users', params);
 }

 /**
 * mysql-remove_hostname
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 removeHostname(params) {
  return this.request('mysql-remove_hostname', params);
 }

 /**
 * mysql-remove_user
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 removeUser(params) {
  return this.request('mysql-remove_user', params);
 }
}

module.exports = Mysql;
