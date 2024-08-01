import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function CardProducts({ name, img }) {
  return (
    <Card style={{ width: "auto" }}>
      <Card.Img variant="top" src={img} style={{ height: "45vh" }} />
      <Card.Body>
        <Card.Title className="cart_tittle">{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button className="buy_button" variant="sm">
          Price
        </Button>
      </Card.Body>
    </Card>
  );
}
