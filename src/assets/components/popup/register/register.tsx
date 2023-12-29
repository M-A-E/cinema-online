import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import styles from "./register.module.css";
import LoginPopup from "../login/login";

interface loginProps {
  show: boolean;
  handleClose: () => void;
}

const RegisterPopup: React.FC<loginProps> = ({ show, handleClose }) => {

  const [modalLogin, setModalLogin] = useState(false);
  
  const showModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => setModalLogin(false);

  return (
    <Modal show={show} onHide={handleClose}  animation={true}>
      <div className={styles["form-card"]}>
        <h1 className={styles["title-register"]}>Register</h1>
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
          <Form.Group controlId="formBasicFullname">
            <Form.Control
              className={styles["form-control"]}
              type="text"
              placeholder="full name"
            />
          </Form.Group>
          <Button
            className={styles["btn-login"]}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
          <p className={styles["create-account"]}>
            Already have an account ?
            <a onClick={showModalLogin} className={styles["link-register"]}>Klik Here</a>
          </p>
        </Form>
        <LoginPopup show={modalLogin} handleClose={closeModalLogin} />
      </div>
    </Modal>
  );
};

export default RegisterPopup;
