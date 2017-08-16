export default function () {

  this.passthrough('/write-coverage');

  this.get('/discoverable-taxonomy-sets');
  this.get('/discoverable-taxonomy-sets/:id');

  this.get('/role-types');
  this.get('/role-types/:id');

  this.get('/presentation-nodes');
  this.get('/presentation-nodes/:id');

  this.get('/dimension-nodes');
  this.get('/dimension-nodes/:id');

  this.get('/elements');
  this.get('/elements/:id');

  this.get('/labels');
  this.get('/labels/:id');
  
  this.get('/dimensions');
}
