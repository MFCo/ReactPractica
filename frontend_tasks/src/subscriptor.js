import React from 'react';
var EventBus = require('eventbusjs');



function withSubscription(WrappedComponent) {
  var table = [];
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      EventBus.addEventListener("table updated", (t) => {
        var newData = table.slice();
        newData = newData.concat(t.target);
        table = newData;
        this.forceUpdate();
      })
    }


    render() {
      return <WrappedComponent data={table} {...this.props} />;
    }
  };
}

export default withSubscription;
