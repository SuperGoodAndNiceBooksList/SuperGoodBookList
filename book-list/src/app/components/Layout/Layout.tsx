import React from "react";
import { Navigation } from "../Navigation/Navigation";
import '../../globals.css'

("use-client");

const Layout = ({children}: any) => {
    return (<>
    <Navigation/>
        <main>{children}</main>
    <footer className="flex justify-center border-t-2">SuperNiceAndGoodFooter</footer>
    </>);
}

export { Layout };