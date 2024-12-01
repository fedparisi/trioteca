import React, { useState } from "react";
import AppraisalRequest from "@js/features/appraisalRequest/components/appraisalRequest";
import styles from "@scss/features/appraisalRequest/pages/appraisalRequestPage.module.scss";
import { Container, Button } from "react-bootstrap";
import CreateAppraisalRequestModal from "@js/features/appraisalRequest/components/modals/CreateAppraisalRequestModal";

const AppraisalRequestPage = () => {
    const [createModalVisible, setCreateModalVisible] = useState(false);

    return (
        <div>
            <Container fluid="lg">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className={styles.title}>Solicitudes de tasación</h2>
                    <Button
                    className="ml-4"
                        variant="primary"
                        onClick={() => setCreateModalVisible(true)}
                    >
                        Nueva solicitud
                    </Button>
                </div>
                <AppraisalRequest />
                <CreateAppraisalRequestModal
                    visible={createModalVisible}
                    setVisible={setCreateModalVisible}
                    title="Crear Solicitud de Tasación"
                />
            </Container>
        </div>
    );
};

export default AppraisalRequestPage;
