import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    const roleType = this.modelFor('discoverable-taxonomy-set.role-type');
    const nodes = await roleType.get('presentationNodes');
    this.set('nodes', nodes);
    return nodes.filter((node) => node.belongsTo('parent').value() === null);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('nodes', this.get('nodes'));
  }
});
