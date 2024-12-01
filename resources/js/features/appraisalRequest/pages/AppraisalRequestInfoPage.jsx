import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAppraisalRequestByIdQuery } from "@js/features/appraisalRequest/slices/appraisalRequestApi";
import LoadingItemsErrorAlert from "@js/components/Alert/LoadingItemsErrorAlert";
import NoItemsFoundAlert from "@js/components/Alert/NoItemsFoundAlert";
import FetchingItemsAlert from "@js/components/Alert/FetchingItemsAlert";
import AppraisalRequestHistoriesList from "@js/features/appraisalRequest/components/lists/AppraisalRequestHistoriesList";
import { Button, Card } from "react-bootstrap"; // Importar Card de react-bootstrap
import CreateAppraisalHistoryModal from "@js/features/appraisalHistory/components/modals/CreateAppraisalHistoryModal";
import styles from "@scss/features/appraisalRequest/pages/appraisalRequestPage.module.scss";


export const AppraisalRequestInfoPage = () => {
    const { appraisalRequestId } = useParams();
    const [createModalVisible, setCreateModalVisible] = useState(false);

    const {
        data: { data: appraisalData = {} } = {},
        isFetching,
        isError,
        isSuccess,
        error,
    } = useGetAppraisalRequestByIdQuery(appraisalRequestId);

    const noItemsLabel = isFetching ? (
        <FetchingItemsAlert spinner={false} />
    ) : isError ? (
        <LoadingItemsErrorAlert children={<>{error.data?.data?.message}</>} />
    ) : isSuccess && appraisalData?.length === 0 ? (
        <NoItemsFoundAlert />
    ) : null;

    if (isError) {
        return (
            <LoadingItemsErrorAlert
                children={<>{error.data?.data?.message}</>}
            />
        );
    }

    const itemClassName =
        "border-start border-start-4 resource-data-list__item";

    return (
        <section className="mb-4">
            <h2 className={styles.title}>Tasación #{appraisalRequestId}</h2>
            <Button
                variant="primary"
                onClick={() => setCreateModalVisible(true)}
                className="mt-4 mb-4"
            >
                Cambiar Estado
            </Button>
            <Card>
                <Card.Body>
                    <div className="mb-4">{noItemsLabel}</div>
                    <h3 className="visually-hidden">
                        Datos generales de la solicitud de tasación
                    </h3>

                    <ul className={`resource-data-list`}>
                        <li className={`${itemClassName} border-start-info`}>
                            <span className="resource-data-list__item__label">
                                Nombre del solicitante
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.customer_name ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-danger`}>
                            <span className="resource-data-list__item__label">
                                Teléfono
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.customer_telephone ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-warning`}>
                            <span className="resource-data-list__item__label">
                                Email
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.customer_email ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-warning`}>
                            <span className="resource-data-list__item__label">
                                Usuario
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.user?.name ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-warning`}>
                            <span className="resource-data-list__item__label">
                                Dirección de la propiedad
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.property_address ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-warning`}>
                            <span className="resource-data-list__item__label">
                                Precio de la propiedad
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.property_base_price ||
                                    "No disponible"}
                            </span>
                        </li>

                        <li className={`${itemClassName} border-start-warning`}>
                            <span className="resource-data-list__item__label">
                                Estado
                            </span>
                            <span className="resource-data-list__item__value">
                                {appraisalData?.data?.last_appraisal_history
                                    .new_status.name || "No disponible"}
                            </span>
                        </li>
                    </ul>
                </Card.Body>
            </Card>

            <AppraisalRequestHistoriesList
                histories={appraisalData?.data?.appraisal_histories}
                className="mt-3"
            />

            <CreateAppraisalHistoryModal
                visible={createModalVisible}
                setVisible={setCreateModalVisible}
                title="Crear Solicitud de Tasación"
                appraisal_request_id={appraisalData?.data?.id}
            />
        </section>
    );
};
