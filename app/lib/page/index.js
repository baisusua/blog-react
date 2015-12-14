var React = require('react');

var HelloWorldComponent = React.createClass({
    displayName: 'HelloWorldComponent',
    render: function() {
        return (<div>Hello world</div>);
    }
});

module.exports = HelloWorldComponent;