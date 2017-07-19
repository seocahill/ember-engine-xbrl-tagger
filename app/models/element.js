import DS from 'ember-data';

export default DS.Model.extend({
  presentationNodes: DS.hasMany('presentation-node'),
  dimensionNodes: DS.hasMany('dimension-node'),
  labels: DS.hasMany('label'),

  name: DS.attr('string'),
  itemType: DS.attr('string'),
  substitutionGroup: DS.attr('string'),
  periodType: DS.attr('string'),
  abstract: DS.attr('string'),
  nillable: DS.attr('string')
});
