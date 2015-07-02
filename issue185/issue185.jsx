const commonMixins = [ReactMeteorData];

Issue185Demo = React.createClass({
    render(){
        return (
            <div>
                <h1>{this.props.alias}</h1>
                <ExampleComponent/>
            </div>
        );
    }
});

var ExampleComponent = React.createClass({
    render(){
        return (
            <p>Open the console to see the unexpected error.</p>
            <p>Routes are defined but will not resolve:</p>
            <ul>
                <li><a href="/other">/other</a></li>
                <li><a href="/defined">/defined</a></li>
                <li><a href="/routes">/routes</a></li>
            </ul>
            <p><strong>but if you refresh they resolve?</strong></p>
        )
    }
});

FlowRouter.route("/", {
    subscriptions: function(params, queryParams) {
        // if(queryParams && queryParams.email){
        //     this.register('runwayEventsForEmail', Meteor.subscribe('runwayEvents', queryParams.email));
        // }
    },
    action: function(params, queryParams) {
        ReactLayout.render(Issue185Demo, {alias: "React Component (Issue185Demo)"});
    }
});

FlowRouter.route("/other", {
    action: function(params, queryParams) {
        ReactLayout.render(Issue185Demo, {alias: "/other"});
    }
});
FlowRouter.route("/defined", {
    action: function(params, queryParams) {
        ReactLayout.render(Issue185Demo, {alias: "/defined"});
    }
});
FlowRouter.route("/routes", {
    action: function(params, queryParams) {
        ReactLayout.render(Issue185Demo, {alias: "/routes"});
    }
});
