import Ember from 'ember';

export default Ember.Controller.extend({
  search: false,
  currentCell: Ember.inject.service(),

  actions: {
    updateCell() {
      const cell = this.get('currentCell.cell');
      cell.save();
    }
  }
});