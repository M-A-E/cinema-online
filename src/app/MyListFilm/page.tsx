import AfterLogin from "@/assets/components/navAfterLogin/after";
import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./page.module.css";

export default function MyListFilm() {
  return (
    <Container>
      <Row>
        <AfterLogin />
      </Row>
      <Row>
        <h1 className={styles.title}>My List Film</h1>
        <div className={styles["container-list"]}>
          <img src="/tomAndJerry.png" alt="" className={styles.thumbnail} />
          <img src="/theMeg.png" alt="" className={styles.thumbnail} />
        </div>
      </Row>
    </Container>
  );
}
