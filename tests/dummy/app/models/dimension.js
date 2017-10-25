import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  taxonomyName: DS.attr('string'),
  hypercubeDimension: DS.attr("string"),
  domainMember: DS.attr("string"),
  name: Ember.computed('domainMember', function () {
    return this.get('domainMember')
  })
});
