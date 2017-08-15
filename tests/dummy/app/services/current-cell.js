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
    this.id = 1,
    this.cell = {
      id: 1,
      value: "testing",
      settings: null
    };
  }
});
