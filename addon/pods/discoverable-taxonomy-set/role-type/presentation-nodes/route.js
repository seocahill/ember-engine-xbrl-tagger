import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    const nodes = await this.modelFor('discoverable-taxonomy-set.role-type').get('presentationNodes');
    this.set('nodes', nodes); // needed for search bar
    return nodes.filter((node) => node.belongsTo('parent').value() === null);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('nodes', this.get('nodes'));
  }
});
