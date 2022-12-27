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
class AnnouncementList extends BaseDreamHostModule {
 /**
 * announcement_list-add_subscriber
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 addSubscriber(params) {
  return this.request('announcement_list-add_subscriber', params);
 }

 /**
 * announcement_list-list_lists
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listLists(params) {
  return this.request('announcement_list-list_lists', params);
 }

 /**
 * announcement_list-list_subscribers
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise<Array>}
 */
 listSubscribers(params) {
  return this.request('announcement_list-list_subscribers', params);
 }

 /**
 * announcement_list-post_announcement
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 postAnnouncement(params) {
  return this.request('announcement_list-post_announcement', params);
 }

 /**
 * announcement_list-remove_subscriber
 *
 * See DreamHost documentation for parameters.
 *
 * @param {Object} [params]
 * @return {Promise}
 */
 removeSubscriber(params) {
  return this.request('announcement_list-remove_subscriber', params);
 }
}

module.exports = AnnouncementList;
