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
class Domain extends BaseDreamHostModule {
 /**
 * domain-list_certificates
 *
 * @return {Promise<Array>}
 */
 listCertificates() {
  return this.request('domain-list_certificates');
 }

 /**
 * domain-list_domains
 *
 * @return {Promise<Array>}
 */
 listDomains() {
  return this.request('domain-list_domains');
 }

 /**
 * domain-list_registrations
 *
 * @return {Promise<Array>}
 */
 listRegistrations() {
  return this.request('domain-list_registrations');
 }

 /**
 * domain-registration_available
 *
 * @param {Object} params
 * @param {String} params.domain
 * @return {Promise}
 */
 registrationAvailable(params) {
  return this.request('domain-registration_available', params);
 }
}

module.exports = Domain;
