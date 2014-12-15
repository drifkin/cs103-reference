var Definition = require('./definition.jsx');
var JumpToGroupList = require('./jump-to-group-list.jsx');
var SortToggleButtons = require('./sort-toggle-buttons.jsx');
var constants = require('../constants.js');

var GROUP_NAME_NUMERIC = '0-9';

var DefinitionList = React.createClass({
    getInitialState: function() {
        return {
            sortBy: constants.ALPHABETICAL_SORT
        };
    },
    render: function() {
        // Note: we used to render definitions inside of group divs to give
        // structure to the document. However, this made it so that when we
        // switched to different groupings, React would re-render the contents
        // of each definition. This is normally not that big of a deal, but
        // since we're typesetting definitions with MathJax, a re-render
        // becomes very expensive. So now we flatten the list so group names
        // and definitions are siblings.
        var nodes = [];
        var definitionGroups = this.processDefinitions(this.props.definitions);
        var self = this;
        definitionGroups.forEach(function(group, i) {
            var groupKey = 'group-' + group.name;
            var groupLabelNode = (
                <span key={groupKey}>
                    <div className='group-name' id={groupKey} style={{
                        textAlign: 'left',
                        fontSize: 48,
                        lineHeight: '48px',
                        fontWeight: 'bold',
                        fontFamily: 'bitter',
                        borderBottom: '1px solid #999',
                        marginBottom: 24,
                        marginTop: i === 1 ? 72 : 0
                    }}>
                        {(self.state.sortBy === constants.CHRONOLOGICAL_SORT ? 'Lecture ' : '') + group.name.toUpperCase()}
                    </div>
                </span>
            );
            nodes.push(groupLabelNode);
            nodes = nodes.concat(group.definitions.map(function(definitionInfo) {
                return (
                    <Definition key={definitionInfo.id} name={definitionInfo.name} paragraphs={definitionInfo.definition} lecture={definitionInfo.lecture} slide={definitionInfo.slide}>
                    </Definition>
                );
            }));
        });

       
        return (
            <div style={{
                padding: 16,
                paddingTop: 0
            }}>
                <SortToggleButtons sortBy={this.state.sortBy} toggleChronological={this.setSortToChronological} toggleAlphabetical={this.setSortToAlphabetical}></SortToggleButtons>
                <JumpToGroupList groups={definitionGroups} definitions={this.props.definitions} sortBy={this.state.sortBy}></JumpToGroupList>
                <div style={{
                    paddingTop: 16,
                    fontSize: 13,
                    fontStyle: 'italic',
                    lineHeight: '18px' 
                }}>
                    Useful tip: if you use a browser like Google Chrome, clicking on the lecture slide links will take you to that slide in the PDF.
                </div>
                <div style={{
                    marginTop: 16
                }}>
                    <dl className="definition-list" style={{
                        margin: 0,
                        padding: 0
                    }}>
                        {nodes}
                    </dl>
                </div>
            </div>
        );
    },

    componentDidUpdate: function() {
        // May need to relayout math
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    },

    processDefinitions: function(definitions) {
        var groupNameSortFn;
        var groupSortFn;
        var groupMap = {};
        var self = this;
        definitions.forEach(function(definitionInfo) {
            var groupName;
            if (self.state.sortBy === constants.ALPHABETICAL_SORT) {
                var firstChar = definitionInfo.name.charAt(0);
                if (firstChar >= '0' && firstChar <= '9') {
                    // Special numeric group
                    groupName = GROUP_NAME_NUMERIC;
                } else {
                    groupName = firstChar.toLowerCase();
                }
                groupNameSortFn = undefined; // Just use the standard lexicographic sort
                groupSortFn = function(a, b) {
                    if (a.name < b.name) {
                        return -1;
                    } else if (b.name < a.name) {
                        return 1;
                    }

                    return 0;
                };
            } else {
                groupName = definitionInfo.lecture;
                groupNameSortFn = function(a, b) {
                    return a - b;
                };
                groupSortFn = function(a, b) {
                    // sort by slide (since we're already grouped by lecture)
                    return a.slide - b.slide;
                };
            }

            // Add to group inside of group map
            var group;
            if (groupName in groupMap) {
                group = groupMap[groupName];
            } else {
                group = groupMap[groupName] = [];
            }
            var originalDefinition = definitionInfo.definition;
            if (!(originalDefinition instanceof Array)) {
                // We support multiple paragraphs with arrays, but let a user provide
                // a string for convenience for only a single paragraph
                definitionInfo.definition = [originalDefinition]
            }
            group.push(definitionInfo);
        });

        var keys = Object.keys(groupMap);
        keys.sort(groupNameSortFn);
        return keys.map(function(key) {
            var group = groupMap[key];
            group.sort(groupSortFn);
            return {
                name: key,
                definitions: group
            };
        });
    },

    setSortToChronological: function() {
        this.setState({
            sortBy: constants.CHRONOLOGICAL_SORT
        });
    },

    setSortToAlphabetical: function() {
        this.setState({
            sortBy: constants.ALPHABETICAL_SORT
        });
    }
});

module.exports = DefinitionList;
