import Ember from 'ember';

export default Ember.Controller.extend({
  searchScope: "global",
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  hasTuple: Ember.computed.bool('currentCell.cell.settings.tuple-id'),

  dts: Ember.computed('currentCell.taxonomyId', function() {
    return this.get('store').peekRecord('discoverable-taxonomy-set', this.get('currentCell.taxonomyId'));
  }),

  dimensions: Ember.computed.alias('currentCell.cell.dimensions'),

  dimensionNames: Ember.computed('dimensions.[]', function() {
    if (Ember.isPresent(this.get('dimensions'))) {
      return this.get('dimensions').map((d) => d.get('name')).join(", ");
    } else {
      return "default dimensions"
    }
  }),

  actions: {
    navigateToResult(path, model) {
      this.transitionToRoute(path, model);
    },

    changeRole() {
      this.transitionToRoute('discoverable-taxonomy-set.role-types');
    },

    changeDts() {
      this.set('currentCell.taxonomyId', null);
      this.transitionToRoute('index');
    },

    async linkToTag() {
      const { taxonomyId, roleType, cell } = this.get('currentCell');
      const tag = cell.get('tag');
      if (tag) {
        const element = await this.get('store').findRecord('element', tag)
        const node = await element.get('presentationNodes.firstObject');
        const role = await node.get('roleType');
        // this.set('currentCell.roleType', role);
        this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', taxonomyId, role.get('id'), node.get('id'));
      } else {
        this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-nodes', taxonomyId, roleType.id)
      }
    }
  }
});