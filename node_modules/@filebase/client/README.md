# filebase-js

![ci][ci.icon]
[![package][version.icon]][package.url]
[![styled with prettier][prettier.icon]][prettier.url]
[![size][size.icon]][size.url]
[![codecov][cov.icon]][cov.url]

A client library for the https://filebase.com/ service. It provides a convenient interface for working with the [Raw HTTP API][] from a web browser or [Node.js][] and comes bundled with TS for out-of-the box type inference and better IntelliSense.

## Install

Install the package using npm

```
npm install filebase-js
```

Or yarn

```
yarn add filebase-js
```

## Usage

First, obtain an API token from https://filebase.com and use it in place of `API_TOKEN` below:

```js
import { FilebaseStorage, File } from 'filebase-js'
const client = new FilebaseStorage({ token: 'API_TOKEN' })

async function main() {
  const metadata = await client.store({
    name: 'Pinpie',
    description: 'Pin is not delicious beef!',
    image: new File(
      [
        /* data */
      ],
      'pinpie.jpg',
      { type: 'image/jpg' }
    ),
  })
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

main()
```

The client uses ESM modules. If running from Node.js, either name your script `index.mjs` or name it `index.js` _and_ use `npm init` to create a new `package.json` file in your project directory, adding `"type": "module",` to it.

Run the script:

```sh
node index.mjs # or index.js
```

For more examples please see the [API documentation](https://filebase.github.io/filebase-js/).

[raw http api]: https://docs.filebase.com/api-documentation/s3-compatible-api
[node.js]: https://nodejs.org/
[api documentation]: https://filebase.github.io/filebase-js/
[ci.icon]: https://github.com/filebase/filebase-js/actions/workflows/client.yml/badge.svg
[version.icon]: https://img.shields.io/npm/v/filebase-js.svg
[package.url]: https://npmjs.org/package/filebase-js
[prettier.icon]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier.url]: https://github.com/prettier/prettier
[size.icon]: https://badgen.net/bundlephobia/minzip/filebase-js
[size.url]: https://bundlephobia.com/result?p=filebase-js
[cov.icon]: https://codecov.io/gh/nftstorage/filebase-js/branch/main/graph/badge.svg?token=dU5oWrlqHF
[cov.url]: https://codecov.io/gh/nftstorage/filebase-js
