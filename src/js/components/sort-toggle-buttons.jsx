var constants = require('../constants.js');

var SortToggleButtons = React.createClass({
    render: function() {
        var sortToggleButtons;
        var toggleButtonsStyle = {
            textAlign: 'right',
            fontSize: 13,
            paddingBottom: 16
        };
        var blockWidth = 90;

        var anchorStyle = {
            borderBottom: 'none',
            cursor: 'pointer',
            color: '#bbb',
            width: blockWidth,
            display: 'inline-block'
        };
        var activeStyle = {
            color: '#333',
            width: blockWidth,
            display: 'inline-block'
        };

        if (this.props.sortBy === constants.ALPHABETICAL_SORT) {
            sortToggleButtons = (
                <div style={toggleButtonsStyle}>
                    <a onClick={this.props.toggleChronological} style={anchorStyle}>
                        Chronological
                    </a>
                    <span style={activeStyle}>Alphabetical</span>
                </div>
            );
        } else {
            sortToggleButtons = (
                <div style={toggleButtonsStyle}>
                    <span style={activeStyle}>
                        Chronological
                    </span>
                    <a onClick={this.props.toggleAlphabetical} style={anchorStyle}>Alphabetical</a>
                </div>
            );
        }
        return sortToggleButtons;
    }
});

module.exports = SortToggleButtons;
