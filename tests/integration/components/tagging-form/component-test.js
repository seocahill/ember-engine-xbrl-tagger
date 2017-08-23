import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import { click, fillIn, find /* findAll, keyEvent, triggerEvent*/ } from 'ember-native-dom-helpers';

moduleForComponent('tagging-form', 'Integration | Component | tagging form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{tagging-form}}`);
  // assert.async();

  // fillIn('.form-control', '31-12-2014');
  // await click('button');
  // assert.equal(find('select').val(), '31-12-2014');


  // assert.equal(this.$().text().trim(), 'template block text');
});
