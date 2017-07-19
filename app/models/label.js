import DS from 'ember-data';

export default DS.Model.extend({
  element: DS.belongsTo('element'),

  label: DS.attr('string'),
  documentation: DS.attr('string'),
  periodStartLabel: DS.attr('string'),
  periodEndLabel: DS.attr('string'),
  verboseLabel: DS.attr('string')
});
