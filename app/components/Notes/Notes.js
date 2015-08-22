var React = require('react');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function() {
    return (
      <div>
        Notes: {this.props.notes}
      </div>
    );
  }
});

module.exports = Notes;
