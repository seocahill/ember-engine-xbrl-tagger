import Ember from 'ember';

export default Ember.Controller.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  dimensions: Ember.computed.alias('currentCell.cell.dimensions'),
  cellDimensionIds: Ember.computed.mapBy('dimensions', 'id'),
  
  actions: {

    selectDimensions(event) {
      const selected = Ember.$(event.target).val();
      const dimensions = this.get('model').filter((dimension) => selected.includes(dimension.get('id')));
      this.set('dimensions', dimensions);
    },

    saveCell() {
      this.get('currentCell.cell').save();
    }
  }
});