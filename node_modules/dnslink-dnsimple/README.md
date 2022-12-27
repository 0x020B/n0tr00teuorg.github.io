# dnslink-dnsimple

_Create and update [DNSLink](http://dnslink.io) records via the v2 dnsimple api_

You may also like
- [dnslink-cloudflare](https://github.com/ipfs-shipyard/dnslink-cloudflare) - same idea, for Cloudflare
- [dnslink-deploy](https://github.com/ipfs/dnslink-deploy) - same idea, for Digital Ocean

## Usage

The dnsimple api requires and authentication token. Provide it by setting `DNSIMPLE_TOKEN` as an environment variable.

You can then use `dnsimple-dnslink` link a domain to CID

```console
$ DNSIMPLE_TOKEN=$(cat token) dnslink-dnsimple -d example.org -l /ipfs/QmYz5328tp9deVZ8Ttuhhri5WicLvDznngYbZ68zKJeGRd

```

That will create or update a `TXT` record via the dnsimple api at `_dnslink.example.org` with the value `dnslink=/ipfs/QmYz5328tp9deVZ8Ttuhhri5WicLvDznngYbZ68zKJeGRd`, assuming your account already has a zone for `example.org` and your token is valid.

To get the full usage info just run `dnslink-dnsimple`

```console
$ dnslink-dnsimple
USAGE
    DNSIMPLE_TOKEN=trustno1 dnslink-dnsimple -d <domain-name> -l <dnslink-value>
OPTIONS
    -l, --link  <string>    dnslink value, eg. ipfs path (required)
    -d, --domain <string>   dnsimple domain name (required)
    -r, --record <string>   domain record name (default: "_dnslink")
    --ttl <int>             set the ttl of the record (default: 60)
    --sandbox               use the dnsimple sandbox api
    --help                  show this documentation
EXAMPLES
    DNSIMPLE_TOKEN=$(cat token) dnslink-dnsimple -d domain.net -l /ipns/ipfs.io
```

## Install

You can install via `npm`

```console
$ npm install -g dnsimple-dnslink
```

or you can run it directly via `npx`

```console
$ DNSIMPLE_TOKEN=$(cat token) npx dnsimple-dnslink -d webui.ipfs.io -l /ipfs/QmYz5328tp9deVZ8Ttuhhri5WicLvDznngYbZ68zKJeGRd
```

## License

MIT © Protocol Labs
