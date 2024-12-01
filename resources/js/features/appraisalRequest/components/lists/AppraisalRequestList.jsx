import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGetAppraisalRequestsQuery } from "@js/features/appraisalRequest/slices/appraisalRequestApi";
import LoadingItemsErrorAlert from "@js/components/Alert/LoadingItemsErrorAlert";
import NoItemsFoundAlert from "@js/components/Alert/NoItemsFoundAlert";
import FetchingItemsAlert from "@js/components/Alert/FetchingItemsAlert";
import styles from "@scss/features/AppraisalRequest/components/AppraisalRequests.module.scss";

const AppraisalRequestsList = () => {
    const navigate = useNavigate();
    const {
        data: { data: responseData = {} } = {},
        error,
        isError,
        isFetching,
        isSuccess,
    } = useGetAppraisalRequestsQuery();

    const columns = [
        { key: "id", label: "ID" },
        { key: "customer_name", label: "Nombre Solicitante" },
        { key: "property_address", label: "Dirección" },
        { key: "property_base_price", label: "Precio" },
        { key: "user", label: "Usuario" },
        { key: "last_appraisal_history", label: "Estado" },
    ];

    // Asegurarse de que los datos sean un array
    let items = [];
    if (responseData && responseData.data && responseData.data.length > 0) {
        items = responseData.data.map((request) => ({
            ...request,
        }));
    }

    const noItemsLabel = isFetching ? (
        <FetchingItemsAlert spinner={false} />
    ) : isError ? (
        <LoadingItemsErrorAlert>{error.data?.data?.message}</LoadingItemsErrorAlert>
    ) : isSuccess && items.length === 0 ? (
        <NoItemsFoundAlert />
    ) : null;

    if (isError) {
        return (
            <LoadingItemsErrorAlert>
                {error?.data?.data?.message || "Error al cargar los datos"}
            </LoadingItemsErrorAlert>
        );
    }

    const handleRowClick = (id) => {
        navigate(`/appraisal-requests/${id}`);
    };

    return (
        <div className={`mt-3 ${styles.tableContainer}`}>
            <div className="mb-4">{noItemsLabel}</div>

            {items.length > 0 ? (
                <Table
                    striped
                    bordered
                    hover
                    responsive
                    className={`table-dark ${styles.customTable}`}
                >
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key} className={styles.tableHeader}>
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item.id}
                                onClick={() => handleRowClick(item.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <td>{item.id}</td>
                                <td>{item.customer_name}</td>
                                <td>{item.property_address}</td>
                                <td>{item.property_base_price}</td>
                                <td>{item.user?.name || "No disponible"}</td>
                                <td>
                                    {
                                        item.last_appraisal_history?.new_status
                                            ?.name || "No disponible"
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : null}
        </div>
    );
};

export default AppraisalRequestsList;
