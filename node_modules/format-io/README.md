# Format [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Format size, permissions, etc.

# How to use?

Format could be used in browser or node.

```js
const format = require('format-io');
```

# API

## size

```js
const size = 1024 * 1024 * 5;
format.size(size);
// returns
'5.00mb'
```

## permissions.symbolic

```js
const perm = '00777';
format.permissions.symbolic(perm);
// returns
'rwx rwx rwx'
```

## permissions.numeric

```js
const perm = 'rwx rwx rwx';
format.permissions.numeric(perm);
// returns
'00777'
```

# License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/format-io.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/format-io/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/format-io.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/format-io "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/format-io  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/format-io "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/format-io?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/format-io/badge.svg?branch=master&service=github

