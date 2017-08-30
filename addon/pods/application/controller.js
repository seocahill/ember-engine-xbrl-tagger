import Ember from 'ember';

export default Ember.Controller.extend({
  searchScope: "global",
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  hasTuple: Ember.computed.bool('currentCell.cell.settings.tuple-id'),

  dts: Ember.computed('currentCell.taxonomyId', function() {
    return this.get('store').peekRecord('discoverable-taxonomy-set', this.get('currentCell.taxonomyId'));
  }),

  actions: {
    navigateToResult(path, model) {
      this.transitionToRoute(path, model);
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
        const nodeId = await element.get('presentationNodes.firstObject.id');
        this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-node', taxonomyId, roleType.id, nodeId);
      } else {
        this.transitionToRoute('discoverable-taxonomy-set.role-type.presentation-nodes', taxonomyId, roleType.id)
      }
    }
  }
});