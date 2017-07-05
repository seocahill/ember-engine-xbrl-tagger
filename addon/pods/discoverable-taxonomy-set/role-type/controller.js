import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),

  actions: {
    updateCurrentCell() {
      const cell = this.get('currentCell.cell');
      cell.save().then(() => {
        cell.get('dimensions').forEach((dimension) => dimension.save());
      });
    }
  }
});
