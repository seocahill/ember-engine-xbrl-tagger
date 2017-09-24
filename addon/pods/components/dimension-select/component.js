import Ember from 'ember';

export default Ember.Component.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  classNames: ['form-group'],
  model: null,
  last: null,

  dimensions: Ember.computed.alias('currentCell.cell.dimensions'),
  cellDimensionIds: Ember.computed.mapBy('dimensions', 'id'),

  async init() {
    this._super(...arguments);
    const model = await this._model();
    const sortedModel = model.sortBy("name");
    this.set('model', sortedModel);
  },

  searchResults: Ember.computed('query', 'model.[]', function() {
    const query = this.get('query');
    if (Ember.isPresent(query)) {
      return this.get('model').filter((dimension) => {
        return dimension.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }),

  _model() {
    return this.get('store').query('dimension', {
      filter: {
        taxonomyName: "ie-gaap"
      }
    });
  },

  actions: {

    addDimension(dimension) {
      const dimensions = this.get('dimensions');
      dimensions.addObject(dimension);
      this.set('query', null);
      this.set('last', dimension);
      this.get('currentCell.cell').save();
    },

    removeDimension(dimension) {
      const dimensions = this.get('dimensions');
      dimensions.removeObject(dimension);
      this.get('currentCell.cell').save();
    },
  }

});
