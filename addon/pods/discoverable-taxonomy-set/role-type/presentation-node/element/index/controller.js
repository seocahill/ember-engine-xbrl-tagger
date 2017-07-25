import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  
  actions: {
    updateTag() {
      const cell = this.get('currentCell.cell');
      cell.set('settings', this.get('model'));
      cell.save();
    }
  }
});