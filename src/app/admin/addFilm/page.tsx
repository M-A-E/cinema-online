import React from "react";
import styles from "./page.module.css";
import { Container, Form, Row } from "react-bootstrap";
import NavbarAdmin from "@/assets/components/navbarAdmin/navbar";

export default function AddFilm() {
  return (
    <Container>
      <Row>
        <NavbarAdmin />
      </Row>
      <Row>
        <h1 className={styles.title}>Add Film</h1>
        <Form className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="title"
            style={{
              width: "80%",
              marginRight: "20px",
            }}
          />
          <Form.Control
            type="text"
            placeholder="Attach Thumnail"
            style={{
              width: "20%",
            }}
          />
        </Form>
        <Form>
          <Form.Control
            type="text"
            placeholder="Category"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
            type="text"
            placeholder="Price"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
            type="text"
            placeholder="Link Film"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: "100px", marginBottom: "15px" }}
          />
        </Form>
          <button className={styles["btn-add-film"]}>Add Film</button>
      </Row>
    </Container>
  );
}
