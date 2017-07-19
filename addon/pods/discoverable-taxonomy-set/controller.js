import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),

  actions: {
    changeDts() {
      this.set('currentCell.taxonomyId', null);
      this.transitionToRoute('index');
    }
  }
});