const dnsimple = require('dnsimple')

module.exports = async function dnslink (accessToken, flags) {
  const client = createClient(accessToken, flags)
  const account = await findAccountForDomain(client, flags.domain)
  const record = await createOrUpdateDnslink(client, account.id, flags)
  return { account, record }
}

function createClient (accessToken, { sandbox }) {
  const opts = { accessToken }
  if (sandbox) {
    opts.baseUrl = 'https://api.sandbox.dnsimple.com'
  }
  return dnsimple(opts)
}

// Ensure we have access to an account that has a zone for the domain
async function findAccountForDomain (client, domain) {
  const accounts = await findAccounts(client)
  for (const account of accounts) {
    const zone = await findZoneOrNull(client, account.id, domain)
    if (zone) return account
  }
  throw new Error(`Failed to find zone record for ${domain} with the token provided. Did you use the wrong token?`)
}

// Get the list of accounts available to this token.
async function findAccounts (client) {
  const res = await client.accounts.listAccounts()
  return res.data
}

// Try and fetch a zone record for the domain.
async function findZoneOrNull (client, accountId, domain) {
  try {
    const zone = await client.zones.getZone(accountId, domain)
    return zone.data
  } catch (err) {
    if (err.description === 'Not found') {
      return null
    }
    throw err
  }
}

async function createOrUpdateDnslink (client, accountId, flags) {
  const txtRecord = await findDnslinkRecord(client, accountId, flags)
  if (txtRecord) {
    return updateDnslink(client, accountId, txtRecord.id, flags)
  } else {
    return createDnsLink(client, accountId, flags)
  }
}

// Find a single dnslink record on the domain.
// TODO: Throw if there are multiple and let the user know.
async function findDnslinkRecord (client, accountId, { domain, record }) {
  // dnsimple api is paginated, but `allZoneRecords` unwraps the pagination for us. Nice!
  const opts = { type: 'TXT', name: record }
  const records = await client.zones.allZoneRecords(accountId, domain, opts)
  return records.find(r => r.content.startsWith('dnslink='))
}

async function updateDnslink (client, accountId, recordId, { domain, link, ttl }) {
  const update = {
    content: `dnslink=${link}`,
    ttl
  }
  const res = await client.zones.updateZoneRecord(accountId, domain, recordId, update)
  return res.data
}

async function createDnsLink (client, accountId, { domain, record, link, ttl }) {
  const fields = {
    name: record,
    type: 'TXT',
    content: `dnslink=${link}`,
    ttl
  }
  const res = await client.zones.createZoneRecord(accountId, domain, fields)
  return res.data
}

module.exports.createClient = createClient
module.exports.findDnslinkRecord = findDnslinkRecord
module.exports.findAccountForDomain = findAccountForDomain
module.exports.createOrUpdateDnslink = createOrUpdateDnslink
