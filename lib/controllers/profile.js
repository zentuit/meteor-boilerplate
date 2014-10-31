ProfileController = AppController.extend({
  data: function() {
  	console.log(Meteor.user());
     return Meteor.user();
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});
