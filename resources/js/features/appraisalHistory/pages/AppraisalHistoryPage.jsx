import React from "react";
import AppraisalHistory from "@js/features/appraisalHistory/components/appraisalHistory"
import { Container } from "react-bootstrap";
import styles from "@scss/features/appraisalRequest/pages/appraisalRequestPage.module.scss";

const AppraisalHistoryPage = () => {
    return  (
        <div>
            <Container fluid="md">
                <h2 className={styles.title}>Histórico de solicitud de tasaciones</h2>
                <AppraisalHistory />
            </Container>
        </div>
    );
};

export default AppraisalHistoryPage;
