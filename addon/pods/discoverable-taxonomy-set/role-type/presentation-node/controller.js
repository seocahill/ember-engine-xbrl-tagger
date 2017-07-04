import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  names: ["one", "two"],

  actions: {
    updatePeriod() {
      return;
    }
  }
});