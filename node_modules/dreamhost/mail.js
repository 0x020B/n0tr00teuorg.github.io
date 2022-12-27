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
class Mail extends BaseDreamHostModule {
 /**
 * mail-add_filter
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 addFilter(params) {
  return this.request('mail-add_filter', params);
 }

 /**
 * mail-list_filters
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listFilters(params) {
  return this.request('mail-list_filters', params);
 }

 /**
 * mail-remove_filter
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 removeFilter(params) {
  return this.request('mail-remove_filter', params);
 }
}

module.exports = Mail;
