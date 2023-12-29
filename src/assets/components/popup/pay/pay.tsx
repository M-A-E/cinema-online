/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import styles from "./pay.module.css";

interface props {
  show: boolean;
  handleClose: () => void;
}

export default function Pay({ show, handleClose }: props) {
  return (
    <div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <div className={styles["form-card"]}>
          <h1 className={styles["title"]}>CinemaOnline : 0981312323</h1>
          <div>
            <h1 className={styles["title-tom"]}>Tom & Jerry</h1>
            <div
              className="d-flex"
              style={{
                textAlign: "left",
                alignItems: "center",
              }}
            >
              <h3 className={styles["title-total"]}>Total :</h3>
              <h3 className={styles["title-price"]}> Rp. 158,000</h3>
            </div>
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className={styles["form-control"]}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button
              className={`${styles["btn-pay-option"]} d-flex`}
              type="submit"
            >
              Attach Payment
              <img src="Group.svg" alt=""className={styles["icon-pay"]} />
            </Button>
            <Button
              className={styles["btn-pay"]}
              type="submit"
            >
              Pay
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}
