import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return ['Bill Gates', 'Steve Jobs', 'Andrew DePersio'];
	}
});
