import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | choose Role type');

test('choose role type', async function(assert) {
  await visit('/tagger');
  await click('[data-test-current-role]');
  assert.equal(find('[data-test-role-types] a:first').text(), '01 - Entity Information');
  await click('[data-test-role-id="1"]');
  assert.equal(currentPath(), 'tagger.discoverable-taxonomy-set.role-type.presentation-nodes');
});
