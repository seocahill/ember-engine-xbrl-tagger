import Ember from 'ember';

export default Ember.Service.extend({
  taxonomyId: null,
  roleTypeId: null,
  periods: [],

  id: null,
  cell: null,

  tag: null,
  period: null,
  value: null,

  dimensions: [],

  init() {
    this._super();
    this.taxonomyId = "1";
    this.roleTypeId = "1";
    this.periods = ["31-12-2016", "31-12-2015", "31-12-2014", "31-12-2013"];
    this.id = 1,
    this.cell = {
      id: 1,
      value: "Joe A. Bloggs Ordinary shares 6000",
      settings: null
    };
  }
});
