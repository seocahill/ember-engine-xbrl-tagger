import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  presentationNodes: DS.hasMany('presentation-node'),
  dimensionNodes: DS.hasMany('dimension-node'),
  labels: DS.hasMany('label'),

  label: Ember.computed.alias('labels.firstObject.label'),

  name: DS.attr('string'),
  itemType: DS.attr('string'),
  substitutionGroup: DS.attr('string'),
  periodType: DS.attr('string'),
  abstract: DS.attr('string'),
  nillable: DS.attr('string')
});
