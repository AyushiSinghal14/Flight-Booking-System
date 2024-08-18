import React from "react";

import Header from "./../Header/Header";
import Routers from "../../router/Routers";
import Footer from "./../Footer/Footer";

const Layout = () => {
    return (
        <React.Fragment>
            <Header/>
            <Routers/>
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;
