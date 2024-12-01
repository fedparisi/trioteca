import React, { useEffect } from "react";
import { Formik } from "formik";
import { useCreateAppraisalHistoryMutation } from "@js/features/appraisalHistory/slices/appraisalHistoryApi";
import schema from "@js/features/appraisalHistory/components/forms/validators/createAppraisalHistory";
import FormErrors from "@js/components/Form/FormErrors";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const CreateAppraisalHistoryForm = ({ appraisal_request_id }) => {
    const [createAppraisalHistory, { error: apiError, isLoading, isSuccess, isError }] =
        useCreateAppraisalHistoryMutation();

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) =>
                createAppraisalHistory({
                    appraisal_request_id,
                    new_status_id: values.new_status_id,
                })
            }
            initialValues={{
                new_status_id: "",
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                resetForm,
                values,
                touched,
                errors,
            }) => {
                useEffect(() => {
                    if (isSuccess) {
                        resetForm();
                    }
                }, [isSuccess]);

                return (
                    <Form noValidate onSubmit={handleSubmit}>
                        <FormErrors apiError={apiError} className="mb-3" />

                        {isSuccess && (
                            <Alert variant="success" className="mb-3">
                                <p className="mb-0">El historial fue creado exitosamente</p>
                            </Alert>
                        )}

                        {/* Campo oculto opcional para debugging */}
                        <Form.Control type="hidden" value={appraisal_request_id} />

                        <Row className="mb-2">
                            <Col sm="12">
                                <Form.Group controlId="new_status_id">
                                    <Form.Label>Estado de tasación</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="new_status_id"
                                        value={values.new_status_id}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.new_status_id && !!errors.new_status_id}
                                        isValid={touched.new_status_id && !errors.new_status_id}
                                    >
                                        <option value="">Seleccione un estado</option>
                                        {/* Opciones para los estados */}
                                        <option value="1">Solicitado</option>
                                        <option value="2">En proceso</option>
                                        <option value="3">Tasación completada</option>
                                        <option value="4">Rechazado</option>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.new_status_id}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button type="submit" variant="primary" disabled={isLoading}>
                            {!isLoading ? "Guardar" : "Guardando..."}
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default CreateAppraisalHistoryForm;
