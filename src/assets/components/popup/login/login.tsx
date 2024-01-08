"use client"
import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import styles from "./login.module.css";
import RegisterPopup from "../register/register";
import { useRouter } from 'next/navigation';

interface LoginProps {
  show: boolean;
  handleClose: () => void;
}

const LoginPopup: React.FC<LoginProps> = ({ show, handleClose }) => {
  const [modalRegister, setModalRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const showModalRegister = () => setModalRegister(true);
  const closeModalRegister = () => setModalRegister(false);

  const user = {
    email: "asep123@gmail.com",
    password: "asep123",
  };

  const admin = {
    email: "admin123@gmail.com",
    password: "admin123",
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (email === user.email && password === user.password) {
      console.log('Login berhasil!');
      router.push('afterLogin'); 
    } else {
      setError('Email atau password tidak valid');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <div className={styles["form-card"]}>
        <h1 className={styles["title-login"]}>Login</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className={styles["form-control"]}
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className={styles["form-control"]}
              type="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
          {error && <p className={styles["error-message"]}>{error}</p>}
          <Button
            className={styles["btn-login"]}
            variant="primary"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </Button>
          <p className={styles["create-account"]}>
            Belum punya akun?{" "}
            <a onClick={showModalRegister} className={styles["link-register"]}>
              Klik di sini
            </a>
          </p>
        </Form>
        <RegisterPopup show={modalRegister} handleClose={closeModalRegister} />
      </div>
    </Modal>
  );
};

export default LoginPopup;
