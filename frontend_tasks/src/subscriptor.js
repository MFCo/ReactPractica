import React from 'react';
import store from './store';


function withSubscription(selectData = () => { return [] }, selectActions = () => { return [] }) {
  return (WrappedComponent) => {
    var d = [];
    var a = [];
    return class extends React.Component {
      constructor(props) {
        super(props);
      }
      componentDidMount() {
        store.subscribe(() => {
          d = selectData(store);
          this.forceUpdate();
        });
      }


      render() {
        return <WrappedComponent data={d} {...selectActions() } {...this.props} />;
      }
    };
  }
}

export default withSubscription;