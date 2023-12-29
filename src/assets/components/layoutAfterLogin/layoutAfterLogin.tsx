import Navbar from "@/assets/components/navbar/navbar";
import React from "react";
import style from "./layout.module.css";

export default function layoutAfterlogin() {
  return (
    <div
      className={style.navbar}
      style={{
        width: "159px",
        height: "44.271px",
      }}
    >
      <Navbar />
      <img src="/profile.png" alt="" />
    </div>
  );
}
