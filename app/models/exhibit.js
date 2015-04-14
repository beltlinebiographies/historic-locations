import DS from "ember-data";

var Exhibit = DS.Model.extend({
  title: DS.attr('string'),
  address: DS.attr('string'),
  url: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  description: DS.attr('string')
});

Exhibit.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Everyone Loves Bikes',
      url: 'https://s3.amazonaws.com/dougs/all-bikes.png',
      description: "Well I don't know, I guess I have some friends I don't see much that love doing things like this :)",
      latitude:33.767430,
      longitude:-84.360744
    },
    {
      id: 2,
      title: 'Look How Sweet!',
      url: 'https://s3.amazonaws.com/dougs/me-bikes-valentines.png',
      description: "This is just a sweet little picture",
      latitude:33.769294,
      longitude:-84.362606
    },
    {
      id: 3,
      title: 'I Won',
      url: 'https://s3.amazonaws.com/dougs/me-leonard-cohen.png',
      description: "I won this sweet vinyl!  And I was cold so I was waring Jenn's scarf.  But it all makes me look really cool!",
      latitude:33.776683,
      longitude:-84.365357
    },
    {
      id: 4,
      title: 'Me In Woods',
      url: 'https://s3.amazonaws.com/dougs/me-woods-cropped.png',
      description: "Well, this is just me in the woods.  That is all.",
      latitude:33.781133,
      longitude:-84.367820
    },
  ]
});

export default Exhibit;
