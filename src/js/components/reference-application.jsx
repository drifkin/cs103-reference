var DefinitionList = require('./definition-list.jsx');

var ReferenceApplication = React.createClass({
    render: function() {
        var definitions = this.props.definitions;
        // evil mutation
        var currentId = 0;
        definitions.forEach(function(definition) {
            definition.id = currentId++;
        });
        return (
            <div style={{
                maxWidth: 600,
                margin: '0 auto'
            }}>
            <h1 style={{
                fontFamily: 'bitter, serif',
                textAlign: 'center'
            }}>
                CS 103 Theorems &amp; Definitions</h1>
                <DefinitionList definitions={definitions}></DefinitionList>
            </div>
        )
    }
});

module.exports = ReferenceApplication;
