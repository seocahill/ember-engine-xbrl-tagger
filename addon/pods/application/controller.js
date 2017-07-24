import Ember from 'ember';

export default Ember.Controller.extend({
  searchScope: "global",
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  dts: Ember.computed('currentCell.taxonomyId', function() {
    return this.get('store').peekRecord('discoverable-taxonomy-set', this.get('currentCell.taxonomyId'));
  }),

  actions: {
    navigateToResult(path, model) {
      this.transitionToRoute(path, model);
    },

    changeDts() {
      this.set('currentCell.taxonomyId', null);
      this.transitionToRoute('index');
    }
  }
});