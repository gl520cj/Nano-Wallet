BIP39 Mnemonics for btcnano
=======

[![NPM Package](https://img.shields.io/npm/v/bitcore-mnemonic.svg?style=flat-square)](https://www.npmjs.org/package/btcnano-mnemonic)
[![Build Status](https://img.shields.io/travis/bitcoinnano/btcnano-mnemonic.svg?branch=master&style=flat-square)](https://travis-ci.org/bitcoinnano/btcnano-mnemonic)
[![Coverage Status](https://img.shields.io/coveralls/bitcoinnano/btcnano-mnemonic.svg?style=flat-square)](https://coveralls.io/r/bitcoinnano/btcnano-mnemonic)

A module for [bitcore](https://github.com/bitpay/bitcore) that implements [Mnemonic code for generating deterministic keys](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install btcnano-mnemonic
bower install btcnano-mnemonic
```

There are many examples of how to use it on the developer guide [section for mnemonic](http://bitcore.io/guide/module/mnemonic/index.html). For example, the following code would generate a new random mnemonic code and convert it to a `HDPrivateKey`.

```javascript
var Mnemonic = require('btcnano-mnemonic');
var code = new Mnemonic(Mnemonic.Words.SPANISH);
code.toString(); // natal hada sutil año sólido papel jamón combate aula flota ver esfera...
var xpriv = code.toHDPrivateKey();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/bitcore/blob/master/CONTRIBUTING.md) on the main bitcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2015-2021 Btcnano, Inc. Btcnano is a trademark maintained by Btcnano, Inc.
