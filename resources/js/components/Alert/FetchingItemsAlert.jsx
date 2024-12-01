import React from "react";
import { Alert, Spinner } from "react-bootstrap";


const FetchingItemsAlert = ({
    children = (
        <>
            OBTENIENDO LOS DATOS
            <br />
            AGUARDE UN INSTANTE POR FAVOR
        </>
    ),
    color = "warning",
    spinner = <Spinner variant="grow" color="primary" className="mt-2" />,
    className = "mb-0",
    innerContainerClassName = "text-center",
}) => (
    <Alert color={color} className={className}>
        <div className={innerContainerClassName}>
            {children}
            {spinner}
        </div>
    </Alert>
);

export default FetchingItemsAlert;
