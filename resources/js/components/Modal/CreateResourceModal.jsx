import React from "react";
import { Button, Modal } from "react-bootstrap";

const CreateResourceModal = ({
    visible,
    setVisible,
    title = null,
    children,
    titleId = "createResourceModal",
    size = null,
}) => {
    return (
        <Modal
            show={visible} // Cambiado de "visible" a "show"
            onHide={() => setVisible(false)} // Cambiado de "onClose" a "onHide"
            aria-labelledby={titleId}
            backdrop="static"
            {...(size ? { size } : {})}
        >
            <Modal.Header closeButton>
                <Modal.Title id={titleId}>
                    {title ? title : "Crear Recurso"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setVisible(false)}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateResourceModal;
