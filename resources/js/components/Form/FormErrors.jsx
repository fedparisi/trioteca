import React from "react";
import { kebabCase } from "lodash";
import styles from "./FormErrors.module.scss";
import { Alert } from "react-bootstrap";

const FormErrors = ({ apiError, className }) => {
    if (!apiError) return null; // No muestra nada si no hay error.

    const fieldErrors = apiError.data?.errors;

    return (
        <Alert
            variant="danger"
            className={`${styles.errors}${className ? ` ${className}` : ""}`}
        >
            {fieldErrors && (
                <ul className={styles.listErrors}>
                    {Object.entries(fieldErrors).map(([field, messages]) =>
                        messages.map((message, index) => (
                            <li
                                key={`field-error-${kebabCase(field)}-${index}`}
                            >
                                {message}
                            </li>
                        ))
                    )}
                </ul>
            )}
        </Alert>
    );
};

export default FormErrors;
