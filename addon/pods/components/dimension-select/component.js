import Ember from 'ember';

export default Ember.Component.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  classNames: ['form-group'],
  model: null,

  dimensions: Ember.computed.alias('currentCell.cell.dimensions'),
  cellDimensionIds: Ember.computed.mapBy('dimensions', 'id'),

  async init() {
    this._super(...arguments);
    const model = await this._model();
    const sortedModel = model.sortBy("name");
    this.set('model', sortedModel);
  },

  _model() {
    return this.get('store').query('dimension', {
      filter: {
        taxonomyName: "ie-gaap"
      }
    });
  },

  actions: {

    selectDimensions(event) {
      const selected = Ember.$(event.target).val();
      const dimensions = this.get('model').filter((dimension) => selected.includes(dimension.get('id')));
      this.set('dimensions', dimensions);
    },
  }

});
