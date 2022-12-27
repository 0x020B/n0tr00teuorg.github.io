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
class Account extends BaseDreamHostModule {
 /**
 * account-domain_usage
 *
 * @return {Promise}
 */
 domainUsage() {
  return this.request('account-domain_usage');
 }

 /**
 * account-list_accounts
 *
 * @return {Promise<Array>}
 */
 listAccounts() {
  return this.request('account-list_accounts');
 }

 /**
 * account-list_keys
 *
 * @return {Promise<Array>}
 */
 listKeys() {
  return this.request('account-list_keys');
 }

 /**
 * account-status
 *
 * @return {Promise}
 */
 status() {
  return this.request('account-status');
 }

 /**
 * account-user_usage
 *
 * @return {Promise}
 */
 userUsage() {
  return this.request('account-user_usage');
 }
}

module.exports = Account;
