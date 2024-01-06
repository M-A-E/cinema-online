import NavbarAdmin from "@/assets/components/navbarAdmin/navbar";
import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import styles from "./page.module.css";

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
            placeholder="attach thumbnail"
            style={{
              width: "20%",
            }}
          />
        </Form>
        <Form>
          <Form.Control
            type="text"
            placeholder="category"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
            type="text"
            placeholder="price"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
            type="text"
            placeholder="List Film"
            style={{
              marginBottom: "15px",
            }}
          />
          <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
        />
        <button className={styles.btn}>Add Film</button>
        </Form>
      </Row>
    </Container>
  );
}
