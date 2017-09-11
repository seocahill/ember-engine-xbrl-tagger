import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | choose DTS', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('choose discoverable taxonomy set', async function(assert) {
  await visit('/tagger');
  assert.equal(currentURL(), '/tagger/discoverable-taxonomy-sets/1/role-types');
});
