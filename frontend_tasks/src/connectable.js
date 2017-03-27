import React from 'react';
import store from './store';


function isConnectable(WrappedComponent, selectedData, selectedActions) {

    return class extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {

            //SEGUIR PELEANDO CON ESTO

        }
        render() {
            return <WrappedComponent data={table} {...this.props} />;
        }
    }

}