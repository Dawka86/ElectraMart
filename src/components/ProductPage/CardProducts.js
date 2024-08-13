import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

export default function CardProducts({ name, img, price, addToCart }) {
  return (
    <Card style={{ width: "auto" }}>
      <Card.Img variant="top" src={img} style={{ height: "45vh" }} />
      <Card.Body>
        <Card.Title className="cart_tittle">{name}</Card.Title>
        <Card.Text>Product description.</Card.Text>
        <div className="price-button-container">
          <Button className="buy_button" variant="sm" onClick={addToCart}>
            Buy
          </Button>
          <p className="cart-price">{price} £</p>
        </div>
      </Card.Body>
    </Card>
  );
}
