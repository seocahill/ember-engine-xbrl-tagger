import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('presentation-node', 'Unit | Model | presentation node', {
  // Specify the other units that are required for this test.
  needs: ['model:role-type', 'model:element']
});

test('returns descendents of node', async function(assert) {
  let model = this.subject();
  let store = this.store();
  Ember.run(() => {
    const child = store.createRecord('presentation-node', { parent: model });
    store.createRecord('presentation-node', { parent: child });
  });
  assert.equal(model.descendents().length, 2);
});
