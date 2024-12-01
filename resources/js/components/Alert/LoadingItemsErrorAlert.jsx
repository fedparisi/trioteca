import React from "react";
import { Alert } from "react-bootstrap";

const LoadingItemsErrorAlert = ({
    children = (
        <>
            SE HA PRODUCIDO UN ERROR AL CARGAR LOS DATOS
            <br />
            INTENTE NUEVAMENTE MÁS TARDE
        </>
    ),
    color = "danger",
    className = "mb-0",
    innerContainerClassName = "text-center",
}) => (
    <Alert color={color} className={className}>
        <div className={innerContainerClassName}>{children}</div>
    </Alert>
);

export default LoadingItemsErrorAlert;
