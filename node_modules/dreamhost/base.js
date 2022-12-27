'use strict';

// creates a global pollyfill
const fetch = require('isomorphic-fetch');
const qs = require('querystring');


/**
 * Base module for each Dreamhost API module
 *
 * @private
 */
class DreamhostAPIModule {

  /**
   * @constructor
   * @param {Object} options
   * @param {String} options.key - DreamHost API Key - get one at https://panel.dreamhost.com/?tree=home.api
   * @param {String} [options.account] - The account number to perform operations under
   * @param {String} [options.api_url=https://api.dreamhost.com/] - URL of Dreamhost API
   */
  constructor(options) {
    if (!options.key) {
      throw new Error('Please specify the Dreamhost API key as the `key: "YOUR_KEY"` option. Get one at https://panel.dreamhost.com/?tree=home.api');
    }

    this.key = options.key;
    this.api_url = options.api_url || 'https://api.dreamhost.com/?';
    this.account = options.account;
    if (this.api_url.indexOf('?') === -1) {
      this.api_url += '?';
    }
  }

  /**
   * Helper method to set command and make API Calls
   *
   * todo: support non-string types
   * todo: automatically parse non-string values
   * todo: ensure errors are thrown rather than returned as data
   * todo: use post when appropriate
   *
   * @param {String} cmd
   * @param {Object} [params]
   * @return {Promise<Object>}
   */
  request(cmd, params) {
    params = params || {};
    params.cmd = cmd;
    params.key = this.key;
    params.format = 'json';
    if (this.account) {
      params.account = this.account;
    }
    return fetch(this.api_url + qs.stringify(params))
      .then(this.handleResponse);
  }

  /**
   * Extracts data and formats errors
   * @private
   * @param {Response} response
   * @return {Promise<*>}
   */
  handleResponse(response) {
    return response.json().then(body => {
      if (body.result === 'success') {
        return body.data;
      } else if (body.result === 'error') {
        // an error might look like {"reason":"The API key you provided does not exist.","data":"invalid_api_key","result":"error"}⏎
        // note: dreamhost puts a 200 status code even on errors
        const err = new Error(`DreamHost API Error: ${body.reason || body.data}`);
        err.code = body.data || 'unknown _error';
        err.raw = body;
        throw err;
      } else {
        const err = new Error('Unexpected response format from DreamHost API');
        err.code = body.data || 'unknown _error';
        err.raw = body;
        throw err;
      }
    });
  }
}

module.exports = DreamhostAPIModule;
