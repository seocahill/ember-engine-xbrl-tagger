import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigate to tag', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Navigate to tag and tag item', async function (assert) {
  await visit('/tagger');
  await click('[data-test-cell-tag]');
  await fillIn(find('[data-test-search-input]'), 'Officer').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("NameEntityOfficer")');
  assert.equal(currentPath(), 'tagger.discoverable-taxonomy-set.role-type.presentation-node.element');
  assert.equal(find('h6 a').text().trim(), 'Name of entity officer');
  assert.equal(find('[data-test-period-select]').val(), '31-12-2016');
  assert.equal(find('[data-test-dimension-select]').val(), '');
  fillIn('[data-test-period-select]', '31-12-2014');
  await find('[data-test-dimension-select] option[value=1]').prop('selected', true).trigger('change');
  await click('button');
  assert.equal(find('[data-test-period-select] option:selected').val(), '31-12-2014');
  assert.equal(find('[data-test-dimension-select] option:selected').val(), '1');
});
     