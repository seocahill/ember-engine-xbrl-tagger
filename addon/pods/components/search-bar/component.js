import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service(),
  store: Ember.inject.service(),
  query: null,
  results: [],

  didReceiveAttrs() {
    this._super(...arguments);
    this.set('query', null);
  },

  _filterModel() {
    const query = this.get('query');
    if (Ember.isBlank(query)) {
      this.set('results', null);
    } else {
      const results = this.get('model').filter((item) => {
        return item.get('name').toLowerCase().search(query.toLowerCase()) !== -1;
      });
      this.set('results', results);
    }
  },

  actions: {
    filterModel() {
      Ember.run.debounce(this, this._filterModel, 500)
    },

    handleClick(model) {
      this.get('router').transitionTo("client.account-set.ember-xbrl-tagger.discoverable-taxonomy-set.role-type.presentation-node", model);
      this.setProperties({results: [], query: null});
    }
  }
});
