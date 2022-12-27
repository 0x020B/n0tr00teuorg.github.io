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
class Api extends BaseDreamHostModule {
 /**
 * api-list_accessible_cmds
 *
 * @return {Promise<Array>}
 */
 listAccessibleCmds() {
  return this.request('api-list_accessible_cmds');
 }

 /**
 * api-list_keys
 *
 * @return {Promise<Array>}
 */
 listKeys() {
  return this.request('api-list_keys');
 }
}

module.exports = Api;
