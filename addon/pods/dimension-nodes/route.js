import Ember from 'ember';

export default Ember.Route.extend({
  currentCell: Ember.inject.service(),
  store: Ember.inject.service(),

  async model() {
    const element = await this.get('store').findRecord('element', this.get('currentCell.cell.tag'));
    const nodes = await element.get('dimensionNodes');
    return nodes.filter((node) => node.get('arcrole') === "http://xbrl.org/int/dim/arcrole/all");
  }
});
