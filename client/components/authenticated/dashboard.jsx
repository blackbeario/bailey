Dashboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe( 'people' );

    return {
      isLoading: !subscription.ready(),
      people: Meteor.users.find().fetch()
    };
  },
  render() {
    if ( this.data.isLoading ) {
      return <Loading />;
    } else {
      return (
        <PeopleTable people={this.data.people} />
      );
    }
  }
});
