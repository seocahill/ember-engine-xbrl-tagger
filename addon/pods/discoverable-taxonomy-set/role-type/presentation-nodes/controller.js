import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  rootNodes: computed.filter('model.presentationNodes', function (node) {
    return node.belongsTo('parent').value() === null;
  })
});
