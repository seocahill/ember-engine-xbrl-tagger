import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  cell: Ember.inject.service('current-cell'),
  model(params) {
    const model = this.get('store').findRecord('discoverable-taxonomy-set', params.dts_id);
    this.get('cell').set('taxonomyId', params.dts_id);
    return model;
  }
});
