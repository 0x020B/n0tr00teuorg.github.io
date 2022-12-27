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
class Rewards extends BaseDreamHostModule {
 /**
 * rewards-add_promo_code
 *
 * @param {Object} params
 * @param {String} params.code
 * @param {String} params.description
 * @param {String} params.bonus_domregs
 * @param {String} params.bonus_ips
 * @param {String} params.discount_month
 * @param {String} params.discount_1year
 * @param {String} params.discount_2year
 * @return {Promise}
 */
 addPromoCode(params) {
  return this.request('rewards-add_promo_code', params);
 }

 /**
 * rewards-disable_promo_code
 *
 * @param {Object} params
 * @param {String} params.code
 * @return {Promise}
 */
 disablePromoCode(params) {
  return this.request('rewards-disable_promo_code', params);
 }

 /**
 * rewards-enable_promo_code
 *
 * @param {Object} params
 * @param {String} params.code
 * @return {Promise}
 */
 enablePromoCode(params) {
  return this.request('rewards-enable_promo_code', params);
 }

 /**
 * rewards-list_promo_codes
 *
 * @return {Promise<Array>}
 */
 listPromoCodes() {
  return this.request('rewards-list_promo_codes');
 }

 /**
 * rewards-promo_details
 *
 * @param {Object} params
 * @param {String} params.code
 * @return {Promise}
 */
 promoDetails(params) {
  return this.request('rewards-promo_details', params);
 }

 /**
 * rewards-referral_log
 *
 * @param {Object} params
 * @param {String} [params.period]
 * @return {Promise}
 */
 referralLog(params) {
  return this.request('rewards-referral_log', params);
 }

 /**
 * rewards-referral_summary
 *
 * @param {Object} params
 * @param {String} [params.period]
 * @return {Promise}
 */
 referralSummary(params) {
  return this.request('rewards-referral_summary', params);
 }

 /**
 * rewards-remove_promo_code
 *
 * @param {Object} params
 * @param {String} params.code
 * @return {Promise}
 */
 removePromoCode(params) {
  return this.request('rewards-remove_promo_code', params);
 }
}

module.exports = Rewards;
