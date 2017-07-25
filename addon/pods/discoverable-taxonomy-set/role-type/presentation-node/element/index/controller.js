import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  
  actions: {
    updateTag() {
      const cell = this.get('currentCell.cell');
      const model = this.get('model');
      cell.setProperties({
        settings: model,
        tag: model.get('id')
      });
      cell.save();
    }
  }
});