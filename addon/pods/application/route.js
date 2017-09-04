import Ember from 'ember';

export default Ember.Route.extend({
  cell: Ember.inject.service('current-cell'),
  
  beforeModel() {
    // this.replaceWith('index');
  }
});
