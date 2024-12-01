import React from "react";
import CreateResourceModal from "@js/components/Modal/CreateResourceModal";
import CreateAppraisalHistoryForm from "@js/features/appraisalHistory/components/forms/CreateAppraisalHistoryForm";


const CreateAppraisalHistoryModal = ({ visible, setVisible, appraisal_request_id }) => {
    return (
        <CreateResourceModal
            title="Cambiar el estado de la tasación"
            visible={visible}
            setVisible={setVisible}
            titleId="CreateAppraisalHistoryModal"
            size="lg"
        >
            <CreateAppraisalHistoryForm appraisal_request_id={appraisal_request_id} />
        </CreateResourceModal>
    );
};

export default CreateAppraisalHistoryModal;
