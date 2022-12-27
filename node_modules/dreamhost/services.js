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
class Services extends BaseDreamHostModule {
 /**
 * services-flvencoder
 *
 * @param {Object} params
 * @param {String} params.url
 * @return {Promise}
 */
 flvencoder(params) {
  return this.request('services-flvencoder', params);
 }

 /**
 * services-progress
 *
 * @param {Object} params
 * @param {String} params.token
 * @return {Promise}
 */
 progress(params) {
  return this.request('services-progress', params);
 }
}

module.exports = Services;
