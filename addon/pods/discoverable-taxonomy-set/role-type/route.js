import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  currentCell: Ember.inject.service(),
  
  model(params) {
    return this.get('store').findRecord('role-type', params.role_type_id, {
      include: 'presentation-nodes.element'
    });
  },

  afterModel(model) {
    this.controllerFor('application').set('searchScope', model);
    this.set('currentCell.roleType', model);
  }
});
