import React from "react";
import { Card, Container } from "react-bootstrap";

const Dashboard = () => {
    return (
        <div className="dashboard-page">
            <Container className="mt-5">
                <Card className="shadow-lg">
                    <Card.Header className="bg-secondary text-white text-center">
                        <h3>BIENVENIDO AL SOFTWARE DE TASACIÓN DE TRIOTECA</h3>
                    </Card.Header>
                    <Card.Body>
                        <div className="d-flex flex-column align-items-center">
                            <p className="mb-0 text-center">
                                Aquí podrás gestionar todas las tasaciones de manera rápida y eficiente.
                            </p>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted text-center">
                        ¡Comienza ahora con las opciones en el menú!
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default Dashboard;
