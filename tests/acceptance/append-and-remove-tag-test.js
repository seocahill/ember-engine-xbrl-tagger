import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | Append tag and revert', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Append tag and revert', async function (assert) {
  await visit('/tagger');
  await visit('/tagger/discoverable-taxonomy-sets/1/role-types/1/presentation-nodes');
  await click('.btn-outline-primary');
  assert.equal(find('.card .card-block p').text().trim(), 'Appended to previous item/s. remove');
  await click('.card .card-block p a');
  assert.equal(find('ul.list-group li a').text().trim(), "EntityInformationHeading");
});
     