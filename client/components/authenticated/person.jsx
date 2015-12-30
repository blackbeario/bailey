Person = React.createClass({
  render() {
    return (
      <tr>
        <td className="text-center">
          <img style={{width: '50px'}} className="img-circle" src={this.props.person.avatar} alt={this.props.person.name} />
        </td>
        <td>{this.props.person.profile.name.first + ' ' + this.props.person.profile.name.last}</td>
        <td>{this.props.person.emails[0].address}</td>
      </tr>
    );
  }
});
