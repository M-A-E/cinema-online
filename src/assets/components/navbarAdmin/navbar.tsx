/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Navbar from "../navbar/navbar";
import { useRouter } from "next/navigation";


export default function NavbarAdmin() {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  const router = useRouter() 

  const handleRouting = (url: string) => {
    router.push(url)
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
          src="/admin-profile.svg"
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={toggleDropdown}
        />

        {showDropdown && (
          <div className={styles.dropdownStyle}>
            <div>
              <div className={styles.menu} onClick={() => handleRouting("/admin/addFilm ")}>
                <img
                  src="/clapperboard.svg"
                  alt="my listfim"
                  className={styles.image}
                />
                <li className={styles.title}>Add Film</li>
              </div>
              <div className={styles.menu} onClick={() => handleRouting("/")}>
                <img src="/logout.svg" alt="logout" className={styles.image} />
                <li className={styles.title}>Logout</li>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
