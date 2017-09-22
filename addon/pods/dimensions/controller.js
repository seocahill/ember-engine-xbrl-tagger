import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  dimensions: Ember.computed.alias('currentCell.cell.dimensions'),
  
  actions: {
    saveCell() {
      this.get('currentCell.cell').save();
    },

    updateDimensions() {
      const cell = this.get('currentCell.cell');
      const last = this.get('last');
      cell.get('dimensions').addObject(last);
      cell.save();
    } 
  }
});