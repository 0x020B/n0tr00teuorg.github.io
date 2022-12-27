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
class Dns extends BaseDreamHostModule {
 /**
 * dns-add_record
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 addRecord(params) {
  return this.request('dns-add_record', params);
 }

 /**
 * dns-list_records
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listRecords(params) {
  return this.request('dns-list_records', params);
 }

 /**
 * dns-remove_record
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 removeRecord(params) {
  return this.request('dns-remove_record', params);
 }
}

module.exports = Dns;
