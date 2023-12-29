"use client";

import Navbar from "@/assets/components/navbar/navbar";
import styles from "./page.module.css";
import ButtonComponent from "@/assets/components/button/button";
import { Container, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import LoginPopup from "@/assets/components/popup/login/login";
import RegisterPopup from "@/assets/components/popup/register/register";
import Slider from "@/assets/components/slider/slider";
import CardFilm from "@/assets/components/card/card";

export default function Home() {
  const [modalLogin, setModalLogin] = useState(false);

  const showModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => setModalLogin(false);

  const [modalRegister, setModalRegister] = useState(false);

  const showModalRegister = () => setModalRegister(true);
  const closeModalRegister = () => setModalRegister(false);

  return (
    <Container>
      <Row>
        <div className={styles.navbar}>
          <Navbar />
          <div className={styles["contaier-button"]}>
            <a className={styles.login} onClick={showModalLogin}>
              Login
            </a>
            <LoginPopup show={modalLogin} handleClose={closeModalLogin} />
            <ButtonComponent name={"Register"} onClick={showModalRegister} />
            <RegisterPopup
              show={modalRegister}
              handleClose={closeModalRegister}
            />
          </div>
        </div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Slider />
      </Row>
      <Row>
        <h1 className={styles["list-film"]}>List Film</h1>
        <div className={styles.card}>
          <CardFilm
            src={"spiderman3.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CardFilm
            src={"godzillaVSkong.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CardFilm
            src={"tomAndJerry.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CardFilm
            src={"trollis.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CardFilm
            src={"lord.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <CardFilm
            src={"theMeg.png"}
            alt={"thumbnail"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </Row>
    </Container>
  );
}
