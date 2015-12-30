People = new Meteor.Collection( 'people' );

People.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

People.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "The ID of the owner of this document."
  }
});

People.attachSchema( CollectionSchema );
