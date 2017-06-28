import Ember from 'ember';

export default Ember.Controller.extend({
  searchScope: "global",

  actions: {
    navigateToResult(path, model) {
      this.transitionToRoute(path, model);
    }
  }
});