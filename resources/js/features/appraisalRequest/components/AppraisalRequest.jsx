import React from "react";
import { Card, Container } from "react-bootstrap";
import { useGetAppraisalRequestsQuery } from "@js/features/appraisalRequest/slices/appraisalRequestApi";
import AppraisalRequestsList from "@js/features/appraisalRequest/components/lists/AppraisalRequestList";
import styles from "@scss/features/appraisalRequest/pages/appraisalRequestPage.module.scss";

const AppraisalRequest = () => {
    return (
        <div className={styles.appraisalRequestPage}>
            <Container>
                <div className="d-flex ">
                    <AppraisalRequestsList />
                </div>
            </Container>
        </div>
    );
};

export default AppraisalRequest;
