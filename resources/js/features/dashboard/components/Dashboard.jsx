import React from "react";
// import styles from "@scss/features/AppraisalRequest/AppraisalRequest.module.scss";
import { Card, Container } from "react-bootstrap";

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Container>
                <Card
                    title="BIENVENIDO AL SOFTWARE DE TASACION DE TRIOTECA"
                    className="`m-2 ${styles.welcomeCard}`}"
                >
                    <div className="d-flex align-items-center">
                        <p className="mb-0">
                            BIENVENIDO AL SOFTWARE DE TASACION DE TRIOTECA
                        </p>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Dashboard;
