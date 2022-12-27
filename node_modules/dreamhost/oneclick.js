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
class Oneclick extends BaseDreamHostModule {
 /**
 * oneclick-catalog
 *
 * @return {Promise}
 */
 catalog() {
  return this.request('oneclick-catalog');
 }

 /**
 * oneclick-describe_app
 *
 * @param {Object} params
 * @param {String} params.app_id
 * @return {Promise}
 */
 describeApp(params) {
  return this.request('oneclick-describe_app', params);
 }

 /**
 * oneclick-destroy_custom
 *
 * @param {Object} params
 * @param {String} params.install_id
 * @param {String} params.deletefiles
 * @return {Promise}
 */
 destroyCustom(params) {
  return this.request('oneclick-destroy_custom', params);
 }

 /**
 * oneclick-install_custom
 *
 * @param {Object} params
 * @param {String} params.app_id
 * @param {String} params.url
 * @param {String} [params.database]
 * @param {String} [params.repository]
 * @return {Promise}
 */
 installCustom(params) {
  return this.request('oneclick-install_custom', params);
 }

 /**
 * oneclick-list_custom
 *
 * @return {Promise<Array>}
 */
 listCustom() {
  return this.request('oneclick-list_custom');
 }

 /**
 * oneclick-update
 *
 * @param {Object} params
 * @param {String} params.install_id
 * @return {Promise}
 */
 update(params) {
  return this.request('oneclick-update', params);
 }

 /**
 * oneclick-update_all
 *
 * @return {Promise}
 */
 updateAll() {
  return this.request('oneclick-update_all');
 }
}

module.exports = Oneclick;
