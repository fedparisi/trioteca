import React from "react";
import { Alert, Table } from "react-bootstrap";
import styles from "@scss/features/AppraisalRequest/components/AppraisalRequests.module.scss";

const AppraisalRequestHistoriesList = ({ histories }) => {
    if (!histories || histories.length === 0) {
        return (
            <Alert variant="info" className="mt-3">
                No hay historiales disponibles para esta solicitud.
            </Alert>
        );
    }

    return (
        <div className={`mt-3 ${styles.tableContainer}`}>
            <Table
                striped
                bordered
                hover
                responsive
                className={`table-light ${styles.customTable}`}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Estado Anterior</th>
                        <th>Estado Nuevo</th>
                        <th>Usuario</th>
                        <th>Fecha de Creación</th>
                    </tr>
                </thead>
                <tbody>
                    {histories.map((history) => (
                        <tr key={history.id}>
                            <td>{history.id}</td>
                            <td>{history.previous_status?.name || "N/A"}</td>
                            <td>{history.new_status.name}</td>
                            <td>{history.user.name}</td>
                            <td>
                                {new Date(history.created_at).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default AppraisalRequestHistoriesList;
