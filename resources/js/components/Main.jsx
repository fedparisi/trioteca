import React from "react";
import { Outlet } from "react-router-dom";
import styles from "@scss/features/appraisalRequest/pages/appraisalRequestPage.module.scss";

const Main = () => {
    return (
        <main className={`app-main ${styles.pageContainer} mt-5 pb-5` }>
            <Outlet />
        </main>
    );
};

export default Main;
