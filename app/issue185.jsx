const commonMixins = [ReactMeteorData];

Issue185Demo = React.createClass({
    render(){
        return (
            <div className="react-issue-demo">
                <h1>{this.props.alias}</h1>
                <ExampleComponent/>
            </div>
        );
    }
});

var ExampleComponent = React.createClass({
    render(){
        return (
            <div className="example-component">
                <p>Open the console to see the unexpected error.</p>
                <p>Routes are <strong>definitely</strong> defined, see:</p>
                <ul>
                    <li><a href="/other">/other</a></li>
                    <li><a href="/defined">/defined</a></li>
                    <li><a href="/routes">/routes</a></li>
                </ul>
            </div>
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
        let alias = "React Component (Issue185Demo)";
        console.log(`at /`);
        ReactLayout.render(Issue185Demo, {alias});
    }
});

FlowRouter.route("/other", {
    action: function(params, queryParams) {
        let alias = "/other";
        console.log(`at ${alias}`);
        ReactLayout.render(Issue185Demo, {alias});

    }
});
FlowRouter.route("/defined", {
    action: function(params, queryParams) {
        let alias = "/defined";
        console.log(`at ${alias}`);
        ReactLayout.render(Issue185Demo, {alias});
    }
});
FlowRouter.route("/routes", {
    action: function(params, queryParams) {
        let alias = "/routes";
        console.log(`at ${alias}`);
        ReactLayout.render(Issue185Demo, {alias});
    }
});
