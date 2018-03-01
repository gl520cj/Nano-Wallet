'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on btcnano-payment-protocol Module: {0}'
};

module.exports = require('btcnano-lib').errors.extend(spec);
