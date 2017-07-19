import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  names: ["one", "two"],

  actions: {
    updatePeriod() {
      return;
    },

    updateTag() {
      this.get('model.element').then((data) => {
        this.set('currentCell.cell.settings', data);
      })
    }
  }
});