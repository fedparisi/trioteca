import React from "react";
import { Card, Container } from "react-bootstrap";
import styles from "@scss/features/AppraisalHistory/AppraisalHistory.module.scss";

const AppraisalHistory = () => {
    return (
        <div className="dashboard-page">
            <Container >
                <Card
                    title="Historial de cambios de tasaciones"
                    className={`m-2 ${styles.welcomeCard}`}
                >
                    <div className="d-flex align-items-center">
                        <p className="mb-0">
                            Consulta el historial
                        </p>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default AppraisalHistory;
