var ReferenceApplication = require('./components/reference-application.jsx');

React.render(
    <ReferenceApplication definitions={window.definitions} />,
    document.getElementById('container')
);

