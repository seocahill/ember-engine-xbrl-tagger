import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Ember from 'ember';

window.Promise = Ember.RSVP.Promise;

moduleForAcceptance('Acceptance | create dimensions', {
  afterEach() {
    if (server !== undefined) { server.shutdown(); }
  }
});

test('Create dimension for tag', async function (assert) {
  await visit('/tagger/discoverable-taxonomy-sets/1/role-types/1');
  await click('[data-test-cell-tag]');
  await fillIn(find('[data-test-search-input]'), 'Officer').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("NameEntityOfficer")');
  await click('button');
  await click('[data-test-cell-dimensions]');
  await visit('/tagger/dimension-nodes');
  findWithAssert('a:contains("ThirdPartyAgentsHypercube")');
  await click('a:contains("ThirdPartyAgentsHypercube")');
  await click('[data-test-dimension-node="0"] div i:last');
  findWithAssert('[data-test-dimension-node="0"] div:contains("DimensionMembers")');
  await click('[data-test-dimension-node="0"] div i:last');
  findWithAssert('[data-test-dimension-node="0"] div:contains("Entity Accountants Or Auditors")');
  await click('[data-test-dimension-node="0"] div i:first');
  await fillIn(find('[data-test-search-dimension-input]'), 'entity').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("EntityAccountantsOrAuditors")');
  assert.equal(find('[data-test-dimension="2"]').text(), "EntityAccountantsOrAuditors");
});

test('Remove dimension for tag', async function (assert) {
  await visit('/tagger/discoverable-taxonomy-sets/1/role-types/1');
  await click('[data-test-cell-dimensions]');
  await fillIn(find('[data-test-search-dimension-input]'), 'land').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("Land")');
  assert.equal(find('[data-test-dimension="1"]').text(), "Land");
  await click('[data-test-dimension="1"]');
  assert.equal(find('li:last').text(), "Using default dimensions");
});
     