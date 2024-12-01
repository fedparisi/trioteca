import React, { useEffect } from "react";
import { Formik } from "formik";
import { useCreateAppraisalRequestMutation } from "@js/features/appraisalRequest/slices/appraisalRequestApi";
import schema from "@js/features/appraisalRequest/components/forms/validators/createAppraisalRequest";
import FormErrors from "@js/components/Form/FormErrors";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const CreateAppraisalRequestForm = () => {
    
    const [createAppraisalRequest, { error: apiError, isLoading, isSuccess }] =
    useCreateAppraisalRequestMutation();

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) =>
                createAppraisalRequest({
                    customer_name: values.customer_name,
                    customer_telephone: values.customer_telephone,
                    customer_email: values.customer_email,
                    property_address: values.property_address,
                    property_base_price: values.property_base_price,
                })
            }
            initialValues={{
                customer_name: "",
                customer_telephone: "",
                customer_email: "",
                property_address: "",
                property_base_price: "",
            }}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                resetForm,
                setValues,
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
                                <p className="mb-0">La solicitud fue creada exitosamente</p>
                            </Alert>
                        )}

                        <Row className="mb-2">
                            <Col sm="6">
                                <Form.Group controlId="customer_name">
                                    <Form.Label>Ingrese el nombre del cliente</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="customer_name"
                                        value={values.customer_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.customer_name && !!errors.customer_name}
                                        isValid={touched.customer_name && !errors.customer_name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.customer_name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm="6">
                                <Form.Group controlId="customer_telephone">
                                    <Form.Label>Ingrese teléfono de contacto del cliente</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="customer_telephone"
                                        value={values.customer_telephone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.customer_telephone && !!errors.customer_telephone}
                                        isValid={touched.customer_telephone && !errors.customer_telephone}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.customer_telephone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col sm="12">
                                <Form.Group controlId="customer_email">
                                    <Form.Label>Ingrese el email del cliente</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="customer_email"
                                        value={values.customer_email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.customer_email && !!errors.customer_email}
                                        isValid={touched.customer_email && !errors.customer_email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.customer_email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-2">
                            <Col sm="6">
                                <Form.Group controlId="property_address">
                                    <Form.Label>Ingrese la dirección de la propiedad</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="property_address"
                                        value={values.property_address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.property_address && !!errors.property_address}
                                        isValid={touched.property_address && !errors.property_address}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.property_address}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            <Col sm="6">
                                <Form.Group controlId="property_base_price">
                                    <Form.Label>Ingrese el valor de la propiedad</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="property_base_price"
                                        value={values.property_base_price}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.property_base_price && !!errors.property_base_price}
                                        isValid={touched.property_base_price && !errors.property_base_price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.property_base_price}
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

export default CreateAppraisalRequestForm;
