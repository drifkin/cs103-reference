var constants = require('../constants.js');

var JumpToGroupList = React.createClass({
    render: function() {
        var names = [];
        var label = '';
        if (this.props.sortBy === constants.ALPHABETICAL_SORT) {
            names.push('0-9');
            for (var i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
                names.push(String.fromCharCode(i));
            }
        } else {
            label = 'Lectures: ';
            var maxLectureNumber = this.findMaxLectureNumber(this.props.definitions);
            for (var i = 0; i <= maxLectureNumber; i++) {
                names.push('' + i);
            }
        }

        var groups = this.props.groups;
        var groupsMap = {};
        groups.forEach(function(group) {
            var name = group.name;
            groupsMap[name] = true;
        });

        var nodeStyle = {
            fontStyle: 'italic',
            marginRight: 4,
            display: 'inline-block' // allow items to wrap
        };

        var groupNodes = names.map(function(name) {
            var name = name;
            var displayName = name.toUpperCase();
            displayName = name;
            if (name in groupsMap) {
                return (
                    <a key={name} href={'#group-' + name} style={nodeStyle}>
                        {displayName}
                    </a>
                );
            } else {
                return (
                    <span key={name} style={nodeStyle}>
                        {displayName}
                    </span>
                );
            }
        });

        return (
            <div style={{
                textAlign: 'center'
            }}>
                <span>{label}</span>
                {groupNodes}
            </div>
        );
    },

    findMaxLectureNumber: function(definitions) {
        return definitions.reduce(function(max, definition) {
            return Math.max(max, definition.lecture);
        }, 0);
    },
});

module.exports = JumpToGroupList;
