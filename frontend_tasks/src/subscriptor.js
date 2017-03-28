import React from 'react';
import store from './store';


function withSubscription(WrappedComponent, selectData=()=>{return[]}, selectActions=()=>{return[]}) {
  var selectedData = [];
  var selectedActions = [];
  return class extends React.Component {
    constructor(props) {
      super(props);
      selectedActions = selectActions();
    }

    componentDidMount() {
      store.subscribe(() => {
        selectedData = selectData(store);
        this.forceUpdate();
      });
    }


    render() {
      return <WrappedComponent data={selectedData} {...selectedActions} {...this.props} />;
    }
  };
}

export default withSubscription;
