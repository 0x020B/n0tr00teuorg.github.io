'use strict';

const Account = require('./account');
const AnnouncementList = require('./announcement_list');
const Api = require('./api');
const Dns = require('./dns');
const Domain = require('./domain');
const Jabber = require('./jabber');
const Mail = require('./mail');
const Mysql = require('./mysql');
const Oneclick = require('./oneclick');
const Rewards = require('./rewards');
const Services = require('./services');
const User = require('./user');

/**
 * Dreamhost JS API
 *
 * Initializes and provides all submodules with the given key
 *
 * https://help.dreamhost.com/hc/en-us/sections/203903178-API-Application-Programming-Interface-
 */
class Dreamhost {

  /**
   * @param {Object} options
   * @constructor
   */
  constructor(options) {
   this.account = new Account(options);
   this.announcementList = new AnnouncementList(options);
   this.api = new Api(options);
   this.dns = new Dns(options);
   this.domain = new Domain(options);
   this.jabber = new Jabber(options);
   this.mail = new Mail(options);
   this.mysql = new Mysql(options);
   this.oneclick = new Oneclick(options);
   this.rewards = new Rewards(options);
   this.services = new Services(options);
   this.user = new User(options);
  }
}

module.exports = Dreamhost;
