Element.componentStyle(
    STYLED_DIV = {
        'color': red,
        'position': relative,
        'background-position': center
    },
    STYLED_SPAN = {
        'color': black,
        'background-color': red
    }
);

function Element(props) {
    return (<STYLED_DIV className="sarasa"><STYLED_SPAN>HOLA</STYLED_SPAN></STYLED_DIV>);
}

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