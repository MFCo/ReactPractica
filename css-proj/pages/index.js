import {loadCSS} from "fg-loadcss";

var stylesheet = loadCSS( "../components/simple.css" );

const Index = () => (
    <div>
        <p className={"simple"}>Hello Next.js</p>
    </div>
)

export default Index