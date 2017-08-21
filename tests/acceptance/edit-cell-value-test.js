import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit cell value');

test('View cell and tagged cell values', async function(assert) {
  await visit('/tagger');
  await click('[data-test-cell-value]');
  assert.equal(find('[data-test-value]').val(), 'Joe A. Bloggs Ordinary shares 6000');
  assert.equal(find('[data-test-tagged-value]').val(), '');
});

test('Edit cell values', async function (assert) {
  await visit('/tagger');
  await visit('/tagger/value');
  fillIn(find('[data-test-value]'), 'Joe A. Bloggs Preference shares 6000');
  fillIn(find('[data-test-tagged-value]'), '6000');
  await click('button');
  assert.equal(find('[data-test-value]').val(), 'Joe A. Bloggs Preference shares 6000');
  assert.equal(find('[data-test-tagged-value]').val(), '6000');
});
