# DreamHost API Client for Node.js

Complete API client for [DreamHost's][DreamHost] [API].

Ready for browser use if DreamHost ever enables CORS on their API.

## Prerequisites

You'll need a [DreamHost] account, an [API Key][API], and [Node.js] >= v4.

## Installation

    npm install --save dreamhost

## Usage

Create a complete instance

```js
const DreamHost = require('dreamhost');

const dreamHost = new DreamHost({
  key: '<your api key>'
});

// dreamHost will be initialized with all modules available, e.g.
dreamHost.dns.listRecords()
  .then(records => console.log(records))
  .catch(err => console.error(err))
```

Or create an instance of an individual API module:

```js
const DNS = require('dreamhost/dns');

const dns = new DNS({
  key: '<your api key>'
});

dns.listRecords()
  .then(records => console.log(records))
  .catch(err => console.error(err))
```

## API

All methods return a promise that resolves to the `data` field from the DreamHost API response.

* [Account](#account)
* [AnnouncementList](#announcement_list)
* [Api](#api)
* [Dns](#dns)
* [Domain](#domain)
* [Jabber](#jabber)
* [Mail](#mail)
* [Mysql](#mysql)
* [Oneclick](#oneclick)
* [Rewards](#rewards)
* [Services](#services)
* [User](#user)

### Account

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.account.method().then(/*...*/);
```
or
```js
const Account = require('dreamhost/account');
const account = new Account({key: '...'});
account.method().then(/*...*/);
```


#### account.domainUsage(): Promise

Params:
* (none)

Returned objects have the following fields:
* domain
* type
* bw

#### account.listAccounts(): Promise

Params:
* (none)

Returned objects have the following fields:
* account_id
* name
* status
* opened
* yours

#### account.listKeys(): Promise

Params:
* (none)

Returned objects have the following fields:
* key_name
* key_val

#### account.status(): Promise

Params:
* (none)

Returned objects have the following fields:
* key
* value

#### account.userUsage(): Promise

Params:
* (none)

Returned objects have the following fields:
* user
* disk
* disk_as_of
* bw

### AnnouncementList

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.announcementList.method().then(/*...*/);
```
or
```js
const AnnouncementList = require('dreamhost/announcement_list');
const announcementList = new AnnouncementList({key: '...'});
announcementList.method().then(/*...*/);
```


#### announcementList.addSubscriber(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### announcementList.listLists(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### announcementList.listSubscribers(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### announcementList.postAnnouncement(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### announcementList.removeSubscriber(): Promise

See [DreamHost's documentation][API] for parameters and return details.

### Api

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.api.method().then(/*...*/);
```
or
```js
const Api = require('dreamhost/api');
const api = new Api({key: '...'});
api.method().then(/*...*/);
```


#### api.listAccessibleCmds(): Promise

Params:
* (none)

Returned objects have the following fields:
* cmd
* args
* optargs
* order

#### api.listKeys(): Promise

Params:
* (none)

Returned objects have the following fields:
* key
* created
* comment
* functions

### Dns

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.dns.method().then(/*...*/);
```
or
```js
const Dns = require('dreamhost/dns');
const dns = new Dns({key: '...'});
dns.method().then(/*...*/);
```


#### dns.addRecord(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### dns.listRecords(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### dns.removeRecord(): Promise

See [DreamHost's documentation][API] for parameters and return details.

### Domain

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.domain.method().then(/*...*/);
```
or
```js
const Domain = require('dreamhost/domain');
const domain = new Domain({key: '...'});
domain.method().then(/*...*/);
```


#### domain.listCertificates(): Promise

Params:
* (none)

Returned objects have the following fields:
* domain
* type
* signed
* expires
* on_order

#### domain.listDomains(): Promise

Params:
* (none)

Returned objects have the following fields:
* account_id
* domain
* home
* type
* unique_ip
* hosting_type
* user
* path
* outside_url
* www_or_not
* php
* security
* fastcgi
* xcache
* php_fcgid
* passenger

#### domain.listRegistrations(): Promise

Params:
* (none)

Returned objects have the following fields:
* account_id
* domain
* expires
* created
* modified
* autorenew
* locked
* expired
* ns1
* ns2
* ns3
* ns4
* registrant
* registrant_org
* registrant_street1
* registrant_street2
* registrant_city
* registrant_state
* registrant_zip
* registrant_country
* registrant_phone
* registrant_fax
* registrant_email
* tech
* tech_org
* tech_street1
* tech_street2
* tech_city
* tech_state
* tech_zip
* tech_country
* tech_phone
* tech_fax
* tech_email
* billing
* billing_org
* billing_street1
* billing_street2
* billing_city
* billing_state
* billing_zip
* billing_country
* billing_phone
* billing_fax
* billing_email
* admin
* admin_org
* admin_street1
* admin_street2
* admin_city
* admin_state
* admin_zip
* admin_country
* admin_phone
* admin_fax
* admin_email

#### domain.registrationAvailable(): Promise

Params:
* **domain**: required

Returned objects have the following fields:
* available

### Jabber

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.jabber.method().then(/*...*/);
```
or
```js
const Jabber = require('dreamhost/jabber');
const jabber = new Jabber({key: '...'});
jabber.method().then(/*...*/);
```


#### jabber.addUser(): Promise

Params:
* **username**: required
* **domain**: required
* **password**: required

Returned objects have the following fields:
* token

#### jabber.deactivateUser(): Promise

Params:
* **username**: required
* **domain**: required

Returned objects have the following fields:
* token

#### jabber.listUsers(): Promise

Params:
* (none)

Returned objects have the following fields:
* username
* domain
* password
* status

#### jabber.listUsersNoPw(): Promise

Params:
* (none)

Returned objects have the following fields:
* username
* domain
* password

#### jabber.listValidDomains(): Promise

Params:
* (none)

Returned objects have the following fields:
* domain

#### jabber.reactivateUser(): Promise

Params:
* **username**: required
* **domain**: required

Returned objects have the following fields:
* token

#### jabber.removeUser(): Promise

Params:
* **username**: required
* **domain**: required

Returned objects have the following fields:
* token

### Mail

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.mail.method().then(/*...*/);
```
or
```js
const Mail = require('dreamhost/mail');
const mail = new Mail({key: '...'});
mail.method().then(/*...*/);
```


#### mail.addFilter(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mail.listFilters(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mail.removeFilter(): Promise

See [DreamHost's documentation][API] for parameters and return details.

### Mysql

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.mysql.method().then(/*...*/);
```
or
```js
const Mysql = require('dreamhost/mysql');
const mysql = new Mysql({key: '...'});
mysql.method().then(/*...*/);
```


#### mysql.addHostname(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.addUser(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.listDbs(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.listHostnames(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.listUsers(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.removeHostname(): Promise

See [DreamHost's documentation][API] for parameters and return details.

#### mysql.removeUser(): Promise

See [DreamHost's documentation][API] for parameters and return details.

### Oneclick

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.oneclick.method().then(/*...*/);
```
or
```js
const Oneclick = require('dreamhost/oneclick');
const oneclick = new Oneclick({key: '...'});
oneclick.method().then(/*...*/);
```


#### oneclick.catalog(): Promise

Params:
* (none)

Returned objects have the following fields:
* app_id
* name
* version
* developer
* install_mode
* rating
* num_ratings

#### oneclick.describeApp(): Promise

Params:
* **app_id**: required

Returned objects have the following fields:
* app_id
* name
* version
* latest_version
* developer
* excerpt
* tags
* install_mode
* rating
* num_ratings

#### oneclick.destroyCustom(): Promise

Params:
* **install_id**: required
* **deletefiles**: required

#### oneclick.installCustom(): Promise

Params:
* **app_id**: required
* **url**: required
* **database**: optional
* **repository**: optional

Returned objects have the following fields:
* token

#### oneclick.listCustom(): Promise

Params:
* (none)

Returned objects have the following fields:
* app_id
* install_id
* url
* last_updated
* update_setting
* update_available

#### oneclick.update(): Promise

Params:
* **install_id**: required

Returned objects have the following fields:
* token

#### oneclick.updateAll(): Promise

Params:
* (none)

Returned objects have the following fields:
* install_id
* token

### Rewards

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.rewards.method().then(/*...*/);
```
or
```js
const Rewards = require('dreamhost/rewards');
const rewards = new Rewards({key: '...'});
rewards.method().then(/*...*/);
```


#### rewards.addPromoCode(): Promise

Params:
* **code**: required
* **description**: required
* **bonus_domregs**: required
* **bonus_ips**: required
* **discount_month**: required
* **discount_1year**: required
* **discount_2year**: required

#### rewards.disablePromoCode(): Promise

Params:
* **code**: required

#### rewards.enablePromoCode(): Promise

Params:
* **code**: required

#### rewards.listPromoCodes(): Promise

Params:
* (none)

Returned objects have the following fields:
* code
* description
* created
* status
* used

#### rewards.promoDetails(): Promise

Params:
* **code**: required

Returned objects have the following fields:
* code
* description
* status
* discount_month
* discount_1year
* discount_2year
* bonus_domregs
* bonus_ips

#### rewards.referralLog(): Promise

Params:
* **period**: optional

Returned objects have the following fields:
* click_time
* ip
* code
* signup_time
* ref_url
* webid
* status

#### rewards.referralSummary(): Promise

Params:
* **period**: optional

Returned objects have the following fields:
* code
* signups
* raw_clicks
* unique_clicks
* conversion

#### rewards.removePromoCode(): Promise

Params:
* **code**: required

### Services

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.services.method().then(/*...*/);
```
or
```js
const Services = require('dreamhost/services');
const services = new Services({key: '...'});
services.method().then(/*...*/);
```


#### services.flvencoder(): Promise

Params:
* **url**: required

#### services.progress(): Promise

Params:
* **token**: required

Returned objects have the following fields:
* status
* scheduled
* executed
* finished

### User

```js
const DreamHost = require('dreamhost');
const dreamHost = new DreamHost({key: '...'});
dreamHost.user.method().then(/*...*/);
```
or
```js
const User = require('dreamhost/user');
const user = new User({key: '...'});
user.method().then(/*...*/);
```


#### user.addUser(): Promise

Params:
* **type**: required
* **username**: required
* **gecos**: required
* **server**: optional
* **shell_type**: optional
* **password**: optional
* **enhanced_security**: optional

Returned objects have the following fields:
* username
* password
* token

#### user.listUsers(): Promise

Params:
* (none)

Returned objects have the following fields:
* account_id
* username
* type
* shell
* home
* disk_used_mb
* quota_mb
* gecos

#### user.listUsersNoPw(): Promise

Params:
* (none)

Returned objects have the following fields:
* account_id
* username
* type
* shell
* home
* disk_used_mb
* quota_mb
* gecos

#### user.removeUser(): Promise

Params:
* **username**: required
* **type**: optional
* **remove_all**: optional


[DreamHost]: https://www.dreamhost.com/r.cgi?225072
[API]: https://help.dreamhost.com/hc/en-us/sections/203903178-API-Application-Programming-Interface-
[Node.js]: https://nodejs.org/
