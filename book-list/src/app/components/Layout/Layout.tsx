import React from "react";
import { Navigation } from "../Navigation/Navigation";
import { Search } from "../Navigation/Search/Search";
import '../../globals.css'

("use-client");

const Layout = ({children}: any) => {
    return (<>
    <Navigation/>
    <Search />
        <main>{children}</main>
    <footer className="flex justify-center border-t-2">SuperNiceAndGoodFooter</footer>
    </>);
}

export { Layout };