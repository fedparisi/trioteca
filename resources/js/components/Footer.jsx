import React from "react";
import { Container } from "react-bootstrap";
import styles from '@scss/components/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={`app-footer ${styles.footer}`}>
            <Container fluid="lg" className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} Parisi Federico | Trioteca test | +34627931943 | parisi.federico89@gmail.com
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
