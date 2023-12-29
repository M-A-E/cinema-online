import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import styles from "./login.module.css";
import RegisterPopup from "../register/register";

interface loginProps {
  show: boolean;
  handleClose: () => void;
}

const LoginPopup: React.FC<loginProps> = ({ show, handleClose }) => {

  const [modalRegister, setModalRegister] = useState(false);

  const showModalRegister = () => setModalRegister(true)
  const closeModalRegister = () => setModalRegister(false);

  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <div className={styles["form-card"]}>
        <h1 className={styles["title-login"]}>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className={styles["form-control"]}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className={styles["form-control"]}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            className={styles["btn-login"]}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <p className={styles["create-account"]}>
            Don't have an account ?<a onClick={showModalRegister} className={styles["link-register"]}>Klik Here</a>
          </p>
        </Form>
      <RegisterPopup show={modalRegister} handleClose={closeModalRegister} />
      </div>
    </Modal>
  );
};

export default LoginPopup;
