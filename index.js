/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-xbrl-tagger',

  isDevelopingAddon: function () {
    return true;
  },

  lazyLoading: 'false'
});
