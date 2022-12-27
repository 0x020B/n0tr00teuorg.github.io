# Trammel [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

[NPMIMGURL]: https://img.shields.io/npm/v/trammel.svg?style=flat
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/trammel/master.svg?style=flat
[DependencyStatusIMGURL]: https://img.shields.io/david/coderaiser/trammel.svg?style=flat
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]: https://npmjs.org/package/trammel "npm"
[BuildStatusURL]: https://travis-ci.org/coderaiser/trammel "Build Status"
[DependencyStatusURL]: https://david-dm.org/coderaiser/trammel "Dependency Status"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"

Get directory size.

If you want get realtime size updates use [dirsize](https://github.com/coderaiser/node-dirsize).

## Example

```js
import trammel from 'trammel';

await trammel('.');
// returns
'58.47kb';

await trammel('.', {type: 'raw'});
// returns
59_974;

await trammel('do not exist', {stopOnError: true});
// throws
Error;
```

## License

MIT
