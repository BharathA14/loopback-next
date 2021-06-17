// Copyright The LoopBack Authors 2017,2021. All Rights Reserved.
// Node module: @loopback/repository
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const Address = require('./address').Address;

module.exports = {
  name: 'Customer',
  properties: {
    id: {
      type: 'string',
      id: true,
    },
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      regexp: '^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$',
      required: true,
    },
    address: {
      type: Address,
    },
  },
};
