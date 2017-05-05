class Foo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentStyle() {
        STYLED_DIV = {
            'color': red,
            'position': relative,
            'background-position': center
        };
        STYLED_SPAN = {
            'color': black,
            'background-color': red
        };
    }

    render() {
        return (
            <STYLED_SPAN> HOLA </STYLED_SPAN>)
    }
}

class Bar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentStyle() {
        STYLED_DIV = {
            'color': blue,
            'position': relative,
            'background-position': center
        };
        STYLED_SPAN = {
            'color': black,
            'background-color': red
        };
    }

    render() {
        return (
            <STYLED_DIV> HOLA </STYLED_DIV>)
    }
}