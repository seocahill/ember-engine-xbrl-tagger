import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  
  actions: {
    browseDimensions() {
      this.transitionToRoute('dimensions.dimension')
    }
  }
});