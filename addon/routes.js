import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function () {
  this.route('discoverable-taxonomy-sets');
  this.route('discoverable-taxonomy-set', {
    path: 'discoverable-taxonomy-sets/:dts_id'
  }, function() {
    this.route('role-type', {
      path: 'role-types/:role_type_id'
    }, function() {
      this.route('presentation-nodes');
      this.route('presentation-node', {
        path: 'presentation-nodes/:presentation_node_id'
      }, function() {
        this.route('element', {
          path: 'element/:element_id'
        });
        this.route('dimensions');
        this.route('dimension-node', {
          path: 'dimensions/:dimension_node_id'
        }, function() {
          this.route('element', {
            path: 'element/:element_id'
          });
        });
      });
    });
  });
});