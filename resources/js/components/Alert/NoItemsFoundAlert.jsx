import React from "react";
import { Alert } from "react-bootstrap";

const NoItemsFoundAlert = ({
    children = <>NO SE ENCONTRARON RESULTADOS</>,
    color = "info",
    className = "mb-0",
    innerContainerClassName = "text-center",
}) => (
    <Alert color={color} className={className}>
        <div className={innerContainerClassName}>{children}</div>
    </Alert>
);

export default NoItemsFoundAlert;
