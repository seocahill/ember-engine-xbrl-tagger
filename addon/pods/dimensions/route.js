import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),
  currentCell: Ember.inject.service(),

  model() {
    const id = this.get('currentCell.cell.tag');
    if (id) {
      return this.get('store').findRecord('element', id, { include: 'dimension-nodes' })
        .then((element) => {
          return element.get('dimensionNodes').filterBy('arcrole', "http://xbrl.org/int/dim/arcrole/all");
        });
    }
  }
})