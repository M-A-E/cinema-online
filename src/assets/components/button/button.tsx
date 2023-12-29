import React from "react";
import style from "./button.module.css";

interface buttonProps {
  name: string;
  onClick: () => void
}

const ButtonComponent: React.FC<buttonProps> = ({ name, onClick }) => {
  return (
    <div>
      <div>
        <button className={style.button} onClick={onClick}>{name}</button>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ButtonComponent;
