/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Carousel, Container, Row } from "react-bootstrap";
import CardFilm from "../../assets/components/card/card";
import ButtonComponent from "../../assets/components/button/button";
import Pay from "../../assets/components/popup/pay/pay";
import AfterLogin from "@/assets/components/navAfterLogin/after";

export default function NavbarAfterLogin() {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [pay, setPay] = useState(false);

  const onshowPay = () => setPay(true);
  const closeShowPay = () => setPay(false);

  return (
    <Container>
      <Row>
        <AfterLogin />
      </Row>
      <Row className="d-flex justify-content-center">
        <div>
          <Carousel className={styles["slider-box"]}>
            <Carousel.Item>
              <img
                className={`${styles.tumbnail} d-block w-100`}
                src="/deadpool.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className={styles.title}>
                  <h1 className={styles.dead}>DEAD</h1>
                  <h1 className={styles.pool}>POOL</h1>
                </div>
                <p className={styles.price}>Rp. 99,000</p>
                <ButtonComponent name={"Buy now"} onClick={onshowPay} />
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className={`${styles.tumbnail} d-block w-100`}
                src="https://radio.unpad.ac.id/wp-content/uploads/2021/03/godzilla.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <div className={styles.title}>
                  <h1 className={styles.godzilla}>Godzilla</h1>
                  <h1 className={styles.vs}>vs</h1>
                  <h1 className={styles.kong}>Kong</h1>
                </div>
                <p className={styles.price}>Rp. 99,000</p>
                <ButtonComponent name={"Buy now"} onClick={onshowPay} />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <Pay show={pay} handleClose={closeShowPay} />
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
