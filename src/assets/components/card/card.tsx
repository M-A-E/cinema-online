import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import styles from "./card.module.css"

interface cardProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const CardFilm: React.FC<cardProps> = ({ src, alt, onClick }) => {
  return (
    <Container>
      <Row>
        <Card className={styles.card} onClick={onClick}>
          <img className={styles.thumbnail} src={src} alt={alt} />
        </Card>
      </Row>
    </Container>
  );
};

export default CardFilm;
