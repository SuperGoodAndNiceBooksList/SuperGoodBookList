import React from "react";
import { Navigation } from "../Navigation/Navigation";
import '../../globals.css'

("use-client");

const Layout = ({children}: any) => {
    return (<>
    <Navigation/>
        <main>{children}</main>
    <footer>SuperNiceAndGoodFooter</footer>
    </>);
}

export { Layout };