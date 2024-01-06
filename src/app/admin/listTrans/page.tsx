/* eslint-disable @next/next/no-img-element */
import AfterLogin from "@/assets/components/navAfterLogin/after";
import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import styles from "./page.module.css";
import Navbar from "@/assets/components/navbar/navbar";
import NavbarAdmin from "@/assets/components/navbarAdmin/navbar";

export default function ListTrans() {
  return (
    <Container>
      <Row>
        <NavbarAdmin />
      </Row>
      <Row>
        <h1 className={styles.title}>Incoming Transaction</h1>
        <Table
          striped
          bordered
          hover
          variant="dark"
          style={{
            marginTop: "30px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                No
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                User
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                Bukti Transfer
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                Film
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                Number Account
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                Status Payment
              </th>
              <th
                style={{
                  color: "#E50914",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>asep</td>
              <td>bca.jpg</td>
              <td>Tom & Jerry</td>
              <td>0981312321</td>
              <td>Pending</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
