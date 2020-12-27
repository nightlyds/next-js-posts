import React from "react";
import Head from "next/head";
import Footer from "./Footer";

const Layout = (props: any) => {
    const { children } = props;
    return (
        <div>
            <Head>
                <title>Posts</title>
            </Head>
            <div className="container">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
