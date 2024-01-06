import NavbarAdmin from "@/assets/components/navbarAdmin/navbar";
import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import styles from "./page.module.css";

export default function ListTrans() {
  return (
    <Container>
      <Row>
        <NavbarAdmin />
      </Row>
      <Row>
        <h1 className={styles.title}>List Trans</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th
                style={{
                  color: "red",
                }}
              >
                No
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                User
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                Bukti Transfer
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                Film
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                Number Account
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                Status Payment
              </th>
              <th
                style={{
                  color: "red",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Asep</td>
              <td>bca.jpg</td>
              <td>Tom & Jerry</td>
              <td>87324328743</td>
              <td>Panding</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
