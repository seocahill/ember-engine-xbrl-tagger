import Ember from 'ember';

export default Ember.Component.extend({
  currentCell: Ember.inject.service(),
  router: Ember.inject.service(),
  cell: Ember.computed.alias('currentCell.cell'),

  actions: {
    updateTag() {
      const cell = this.get('currentCell.cell');
      const model = this.get('model');
      cell.setProperties({
        settings: model,
        tag: model.get('id')
      });
      if (Ember.isEmpty(cell.get('period'))) {
        cell.set('period', this.get('currentCell.periods.firstObject'));
      }
      cell.save();
    },

    linkToAllNodes() {
      const { taxonomyId, roleType } = this.get('currentCell');
      this.get('router').transitionTo('client.account-set.ember-xbrl-tagger.discoverable-taxonomy-set.role-type.presentation-nodes', taxonomyId, roleType.id);
    }
  }
});