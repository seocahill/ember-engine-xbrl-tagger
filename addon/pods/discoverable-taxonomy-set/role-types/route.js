import Ember from 'ember';

export default Ember.Route.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),
  currentRole: Ember.computed.alias('currentCell.roleType'),

  afterModel(model) {
    if (! this.get('currentRole')) {
      this.set('currentRole', this.get('store').peekAll('role-type').get('firstObject'));
    }
  } 
});
