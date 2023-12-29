/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-bootstrap";
import styles from "./slider.module.css";
import ButtonComponent from "../button/button";
import LoginPopup from "../popup/login/login";
import { useState } from "react";

const Slider = () => {
  const [modalLogin, setModalLogin] = useState(false);

  const showModalLogin = () => setModalLogin(true);
  const closeModalLogin = () => setModalLogin(false);

  return (
    <>
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
            <ButtonComponent name={"Buy now"} onClick={showModalLogin} />
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
            <ButtonComponent name={"Buy now"} onClick={showModalLogin} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <LoginPopup show={modalLogin} handleClose={closeModalLogin} />
    </>
  );
};

export default Slider;
