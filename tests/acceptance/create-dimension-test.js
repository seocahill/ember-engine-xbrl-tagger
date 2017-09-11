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
  findWithAssert('[data-test-dimension-node="0"] div span:contains("Third Party Agent Type Dimension")');
  await click('[data-test-dimension-node="0"] div i');
  findWithAssert('[data-test-dimension-node="0"] div span:contains("DimensionMembersIdentifyingTypeThirdPartyAgentHeading")');
  await click('[data-test-dimension-node="0"] div i');
  findWithAssert('[data-test-dimension-node="0"] div span:contains("Entity Accountants Or Auditors")');
  await click('[data-test-dimension-node="0"] div a');
  await find('[data-test-dimension-select] option[value=1]').prop('selected', true).trigger('change');
  await find('[data-test-dimension-select] option[value=2]').prop('selected', true).trigger('change');
  assert.equal(find('[data-test-dimension-select] select').val().join(","), "1,2");
});

test('Update dimension for tag', async function (assert) {
  await visit('/tagger/discoverable-taxonomy-sets/1/role-types/1');
  await click('[data-test-cell-tag]');
  await fillIn(find('[data-test-search-input]'), 'Officer').triggerEvent('input', 'keyup');
  await click('.list-group a:contains("NameEntityOfficer")');
  await click('button');
  await click('[data-test-cell-dimensions]');
  await visit('/tagger/dimensions');
  assert.equal(find('[data-test-dimension-select] select').val().join(","), "");
  await find('[data-test-dimension-select] option[value=1]').prop('selected', true).trigger('change');
  await click('button');
  assert.equal(find('[data-test-dimension-select] select').val().join(","), "1");
});
     