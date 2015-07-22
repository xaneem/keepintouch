Meteor.autorun(function () {
    Meteor.subscribe("people", Session.get("contact-search"));
});