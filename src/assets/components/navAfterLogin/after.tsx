/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import styles from "./after.module.css";
import { Navbar } from "react-bootstrap";

export default function AfterLogin() {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div
      className="d-flex justify-content-between"
      style={{
        marginTop: "50px",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div style={{ position: "relative" }}>
        <img
          src="profile.svg"
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={toggleDropdown}
        />

        {showDropdown && (
          <div className={styles.dropdownStyle}>
            <ul>
              <div className={styles.menu}>
                <img src="user.svg" alt="profile" className={styles.image} />
                <li className={styles.title}>Profile</li>
              </div>
              <div className={styles.menu}>
                <img
                  src="clapperboard.svg"
                  alt="profile"
                  className={styles.image}
                />
                <li className={styles.title}>My List Film</li>
              </div>
              <div className={styles.menu}>
                <img src="logout.svg" alt="profile" className={styles.image} />
                <li className={styles.title}>Logout</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
