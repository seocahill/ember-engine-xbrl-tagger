import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tagging-form', 'Integration | Component | tagging form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tagging-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs`
  //   {{#tagging-form}}
  //     template block text
  //   {{/tagging-form}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
