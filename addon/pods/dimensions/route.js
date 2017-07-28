import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  currentCell: Ember.inject.service(),

  model() {
    return this.get('store').query('dimension', { 
      filter: {
        taxonomyName: "ie-gaap" 
      }
    });
  }
})