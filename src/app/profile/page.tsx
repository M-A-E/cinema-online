/* eslint-disable @next/next/no-img-element */
import AfterLogin from "@/assets/components/navAfterLogin/after";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";

export default function Profile() {
  return (
    <Container>
      <Row>
        <AfterLogin />
      </Row>
      <Row
        style={{
          marginTop: "87px",
        }}
      >
        <Col
          className="col-lg-6"
        >
          <h1 className={styles["title-head"]}>My Profile</h1>
          <div
            style={{
              display: "flex",
            }}
          >
            <img
              src="/profile-image.png"
              alt="Foto Profile"
              className={styles["foto-profile"]}
            />
            <div
              style={{
                marginLeft: "26px",
              }}
            >
              <div>
                <h2 className={styles.title}>Full Name</h2>
                <p className={styles.value}>asep</p>
              </div>
              <div>
                <h2 className={styles.title}>Email</h2>
                <p className={styles.value}>asep123@gmail.com</p>
              </div>
              <div>
                <h2 className={styles.title}>Phone Number</h2>
                <p className={styles.value}>0812345678</p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="col-lg-6">
          <h1 className={styles["title-head"]}>History Transaction</h1>
          <div className={styles["container-transaction"]}>
            <div>
              <h3 className={styles["title-film"]}>Tom & Jerry</h3>
              <div className={styles["container-date"]}>
                <h3 className={styles.day}>Saturday,</h3>
                <h4 className={styles.date}> 12 April 2021</h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 className={styles.price}>Tom & Jerry</h3>
                <button className={styles["btn-finished"]}>Finished</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
