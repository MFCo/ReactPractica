import React from 'react';
import store from './store';


function withSubscription(WrappedComponent) {
  var table = [];
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      store.subscribe(() => {
        var newData = store.getState().tasks;
        table = newData;
        console.log(table);
        this.forceUpdate();
      });
    }


    render() {
      return <WrappedComponent data={table} {...this.props} />;
    }
  };
}

export default withSubscription;
