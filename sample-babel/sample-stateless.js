Element.componentStyle({
    STYLED_DIV = {
        'color': red,
        'position': relative,
        'background-position': center
    },
    STYLED_SPAN = {
        'color': black,
        'background-color': red
    }
});

function Element(props) {
    return (<STYLED_DIV> HOLA </STYLED_DIV>);
}