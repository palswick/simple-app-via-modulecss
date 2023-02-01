import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";

const ErrorModal = (props) => {
    return (
        <Wrapper>
            <div className={styles.backdrop} onClick={props.onConfirm} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>OK</Button>
                </footer>
            </Card>
        </Wrapper>

    );
};

export default ErrorModal;