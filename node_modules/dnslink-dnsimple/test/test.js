const test = require('ava')
const nock = require('nock')
const dnslink = require('..')

const accountId = 10101
const domain = 'text.example.org'

nock.disableNetConnect()

test('findAccountForDomain', async t => {
  const client = dnslink.createClient('test', {})
  const accountList = require('./fixtures/list-accounts.json')

  const scope = nock('https://api.dnsimple.com')
    .get('/v2/accounts')
    .reply(200, accountList)
    .get(`/v2/${accountId}/zones/${domain}`)
    .reply(200, { data: {} })

  const res = await dnslink.findAccountForDomain(client, domain)
  t.deepEqual(res, accountList.data[0], 'We picked the right account')
  t.is(scope.isDone(), true, 'We called the api')
})

test('findAccountForDomain - no zone for that domain', async t => {
  const client = dnslink.createClient('test', {})
  const accountList = require('./fixtures/list-accounts.json')

  const scope = nock('https://api.dnsimple.com')
    .get('/v2/accounts')
    .reply(200, accountList)
    .get(`/v2/${accountId}/zones/${domain}`)
    .reply(404, {})

  // assert we let the user know if that token cant edit that domain
  const error = await t.throwsAsync(dnslink.findAccountForDomain(client, domain))
  t.regex(error.message, /Did you use the wrong token?/)
  t.is(scope.isDone(), true, 'We called the api')
})

test('findDnslinkRecord', async t => {
  const client = dnslink.createClient('test', {})
  const zoneList = require('./fixtures/list-zones.json')

  const scope = nock('https://api.dnsimple.com')
    .get(`/v2/${accountId}/zones/${domain}/records`)
    .query(true)
    .reply(200, zoneList)

  const res = await dnslink.findDnslinkRecord(client, accountId, { domain, record: '_dnslink' })

  t.deepEqual(res, zoneList.data[0], 'Pick the dnslink')
  t.is(scope.isDone(), true, 'We called the api')
})

test('findDnslinkRecord - no dnslink exists', async t => {
  const client = dnslink.createClient('test', {})
  const zoneList = require('./fixtures/list-zones-no-dnslink.json')

  const scope = nock('https://api.dnsimple.com')
    .get(`/v2/${accountId}/zones/${domain}/records`)
    .query(true)
    .reply(200, zoneList)

  const res = await dnslink.findDnslinkRecord(client, accountId, { domain, record: '_dnslink' })

  t.falsy(res, 'No record returned')
  t.is(scope.isDone(), true, 'We called the api')
})

test('findDnslinkRecord - empty zone list', async t => {
  const client = dnslink.createClient('test', {})
  const zoneList = require('./fixtures/list-zones-empty.json')

  const scope = nock('https://api.dnsimple.com')
    .get(`/v2/${accountId}/zones/${domain}/records`)
    .query(true)
    .reply(200, zoneList)

  const res = await dnslink.findDnslinkRecord(client, accountId, { domain, record: '_dnslink' })

  t.falsy(res, 'No record returned')
  t.is(scope.isDone(), true, 'We called the api')
})

test('createOrUpdateDnslink - create', async t => {
  const client = dnslink.createClient('test', {})
  const zoneList = require('./fixtures/list-zones-empty.json')
  const record = '_dnslink'
  const link = '/ipfs/Cid'
  const ttl = 100

  const scope = nock('https://api.dnsimple.com')
    .get(`/v2/${accountId}/zones/${domain}/records`)
    .query(true)
    .reply(200, zoneList)
    .post(`/v2/${accountId}/zones/${domain}/records`, {
      name: record,
      type: 'TXT',
      content: `dnslink=${link}`,
      ttl
    })
    .reply(201, { data: { id: 100 } })

  const res = await dnslink.createOrUpdateDnslink(client, accountId, { domain, record, link, ttl })

  t.is(res.id, 100, 'Returns the new record')
  t.is(scope.isDone(), true, 'We called the right api')
})

test('createOrUpdateDnslink - update', async t => {
  const client = dnslink.createClient('test', {})
  const zoneList = require('./fixtures/list-zones.json')
  const link = '/ipfs/Cid'
  const ttl = 100

  const scope = nock('https://api.dnsimple.com')
    .get(`/v2/${accountId}/zones/${domain}/records`)
    .query(true)
    .reply(200, zoneList)
    .patch(`/v2/${accountId}/zones/${domain}/records/1234`, {
      content: `dnslink=${link}`,
      ttl
    })
    .reply(200, { data: { id: 100 } })

  const res = await dnslink.createOrUpdateDnslink(client, accountId, { domain, record: '_dnslink', link: '/ipfs/Cid', ttl: 100 })

  t.is(res.id, 100, 'Returns the updated record')
  t.is(scope.isDone(), true, 'We called the api')
})
