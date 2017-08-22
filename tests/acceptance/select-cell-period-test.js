import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | select cell period', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Select cell period', async function (assert) {
  await visit('/tagger');
  await click('[data-test-cell-period]');
  assert.equal(find('select').val(), '31-12-2016');
  fillIn('select', '31-12-2014');
  await click('button');
  assert.equal(find('select').val(), '31-12-2014');
});
     