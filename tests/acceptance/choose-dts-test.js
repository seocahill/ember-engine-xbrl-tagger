import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | choose DTS');

test('choose discoverable taxonomy set', async function(assert) {
  await visit('/tagger');
  assert.equal(currentURL(), '/tagger/discoverable-taxonomy-sets/1/role-types');
  await click('[data-test-current-dts]');
  assert.equal(find('[data-test-dts-menu] li:last').text(), 'IE-GAAP');
});
