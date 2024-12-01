import React from "react";
import CreateResourceModal from "@js/components/Modal/CreateResourceModal";
import CreateAppraisalRequestForm from "@js/features/appraisalRequest/components/forms/CreateAppraisalRequestForm";

const CreateAppraisalRequestModal = ({ visible, setVisible }) => {
    return (
        <CreateResourceModal
            title="Crear solicitud de tasación"
            visible={visible}
            setVisible={setVisible}
            titleId="CreateAppraisalRequestModal"
            size="lg"
        >
            <CreateAppraisalRequestForm />
        </CreateResourceModal>
    );
};

export default CreateAppraisalRequestModal;
