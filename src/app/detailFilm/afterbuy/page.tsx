/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";
import AfterLogin from "@/assets/components/navAfterLogin/after";

export default function DetailFilm() {

  return (
    <Container>
      <Row>
        <AfterLogin />
      </Row>
      <Row
        style={{
          marginTop: "65px",
          display: "flex",
          justifyContent: "center",

        }}
      >
        <Col className="col-md-4">
          <img
            src="/tomAndJerry.png"
            alt="thumbnail"
            className={styles.thumbnail}
          />
        </Col>
        <Col className="col-md-8">
            <h1 className={styles.title}>Tom & Jerry</h1>
          <iframe
            width="735px"
            height="275px"
            src="https://www.youtube.com/embed/kP9TfCWaQT4?si=DuTQH8q4oQHrYZDK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <h3 className={styles.category}>Family</h3>
          <h3 className={styles.price}>Rp. 158,000</h3>
          <p className={styles.description}>
            One of the most beloved rivalries in history is re‐ignited when
            Jerry moves into New York City’s finest hotel on the eve of “the
            wedding of the century,” forcing the event’s desperate planner to
            hire Tom to get rid of him. The ensuing cat and mouse battle
            threatens to destroy her career, the wedding and possibly the hotel
            itself. But soon, an even bigger problem arises: a diabolically
            ambitious staffer conspiring against all three of them. An
            eye‐popping blend of classic animation and live action, Tom and
            Jerry’s new big‐screen adventure stakes new ground for the iconic
            characters and forces them to do the unthinkable...work together to
            save the day.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
