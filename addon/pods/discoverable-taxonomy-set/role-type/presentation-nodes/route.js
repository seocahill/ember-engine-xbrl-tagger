import Ember from 'ember';

export default Ember.Route.extend({
  async model() {
    const nodes = await this.modelFor('discoverable-taxonomy-set.role-type').get('presentationNodes');
    this.set('nodes', nodes);
    return nodes.filter((node) => {
      return node.belongsTo('parent').value() === null
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('nodes', this.get('nodes'));
  }
});
