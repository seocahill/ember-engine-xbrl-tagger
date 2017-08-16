import DS from 'ember-data';

export default DS.Model.extend({
  // cells: DS.hasMany('cell'),
  taxonomyName: DS.attr('string'),
  hypercubeDimension: DS.attr("string"),
  domainMember: DS.attr("string")
});
