import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  element: DS.belongsTo('element'),
  children: DS.hasMany('presentation-node', { inverse: 'parent' }),
  parent: DS.belongsTo('presentation-node', { inverse: 'children' }),
  alias: DS.belongsTo('presentation-node', { inverse: null }),
  roleType: DS.belongsTo('role-type'),
  order: DS.attr('number'),

  name: DS.attr('string'),

  descendents() {
    return this.get('children').reduce((previous, current) => {
      previous.addObject(current);
      if (Ember.isPresent(current.get('children'))) {
        previous.addObjects(current.descendents());
      }
      return previous;
    }, []);
  }
});