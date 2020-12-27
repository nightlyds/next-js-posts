/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import "normalize.css";
import "../basic/css/fonts_and_colors.css";
import "../basic/css/basic.css";
import "../basic/css/posts.css";
import "../basic/css/media_posts.css";
import "../basic/css/addNew.css";
import "../basic/css/media_addNew.css";
import "../basic/css/[post].css";
import "../basic/css/media_[post].css";

const App = ({ Component, pageProps }: any) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export const getStaticProps = async (Component: any, ctx: any) => {
    const pageProps = Component.getStaticProps
        ? await Component.getStaticProps(ctx)
        : {};
    return { pageProps };
};

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
