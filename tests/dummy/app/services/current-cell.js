import Ember from 'ember';

export default Ember.Service.extend({
  taxonomyId: null,
  roleType: null,
  periods: [],

  id: null,
  cell: null,

  init() {
    this._super();
    this.taxonomyId = "1";
    this.periods = ["31-12-2016", "31-12-2015", "31-12-2014", "31-12-2013"];
    this.id = 1,
    this.cell = Ember.Object.create({
      id: 1,
      value: "Joe A. Bloggs Ordinary shares 6000",
      settings: null,
      save: () => true,
      tag: null,
      dimensions: []
    });
  }
});
