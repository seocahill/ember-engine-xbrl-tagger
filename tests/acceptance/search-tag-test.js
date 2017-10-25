import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance |search tag', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Navigate to tag and tag item', async function (assert) {
  await visit('/tagger/discoverable-taxonomy-sets/1/role-types/1');
  await click('[data-test-cell-tag]');
  await fillIn(find('[data-test-search-input]'), 'Officer').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("NameEntityOfficer")');
  assert.equal(currentPath(), 'tagger.discoverable-taxonomy-set.role-type.presentation-node.element');
  assert.equal(find('h6 a').text().trim(), 'Name of entity officer');
  assert.equal(find('[data-test-period-select]').val(), '31-12-2016');
  fillIn('[data-test-period-select]', '31-12-2014');
  await click('button');
  assert.equal(find('[data-test-period-select] option:selected').val(), '31-12-2014');
});
     