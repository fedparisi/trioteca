import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import styles from "@scss/components/Layout/Layout.module.scss";

const Layout = () => {
    return (
            <div className={styles.layout}>
                <div className={styles.right}>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
    );
};

export default Layout;
