import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigate to tag', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Navigate to tag', async function (assert) {
  await visit('/tagger');
  await click('[data-test-cell-tag]');
  findWithAssert('ul.list-group li a:contains("EntityInformationHeading")');
  await click('ul.list-group li a:contains("EntityInformationHeading")');
  findWithAssert('.list-group a:contains("EntityOfficersHeading")');
  await click('.list-group a:contains("EntityOfficersHeading")');
  findWithAssert('.list-group a:contains("NameEntityOfficer")');
  await click('.list-group a:contains("NameEntityOfficer")');
  assert.equal(currentPath(), 'tagger.discoverable-taxonomy-set.role-type.presentation-node.element');
  assert.equal(find('h6 a').text().trim(), 'Name of entity officer');
  await click('h6 a');
  assert.equal(find('[data-test-presentation-node-nav] a:last').text().trim(), 'EntityOfficersHeading');
});
     