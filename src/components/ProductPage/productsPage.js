import Accordion from "react-bootstrap/Accordion";
import CardProducts from "./CardProducts";
import tv1 from "../../assets/images/tv1.jpg";
import tv2 from "../../assets/images/tv2.jpg";
import tv3 from "../../assets/images/tv3.jpg";
import PlayS5 from "../../assets/images/PlayS5.jpg";
import xboxX from "../../assets/images/xboxX.jpg";
import nintendo from "../../assets/images/nintendo.jpg";
import { useState } from "react";
import OverlayProducts from "./Overlay";
import CartMessage from "./CartMessage";

export default function ProductsPage() {
  const [items, setItems] = useState([]); // Products array 
  const [show, setShow] = useState(false); 
  const [message, setMessage] = useState({message:"", title:"", typ:""});// the state in message stores an object with three properties: message, title and typ


  // function responsible for displaying messages
  function showMessage(message, title, typ) {
    setMessage({message, title, typ});
    setShow(true);
  }

  function hiddenMessage() {
    setShow(false);
  }


  // function responsible for add items to the cart  
  // and send message in  second part

  function addItem(item) {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    showMessage("Woow. Product has been added to the cart", "Success", `add`);
  }


  //function responsible for remove items from the cart
  // and second part sending message to confirm

  function deleteProduct(indexToRemove) {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
    showMessage(`The product has been removed from the cart`, "Delete", `delete`);
  }


  // This code calculates the total price of all items in the items array.
  const totalPrice = items.reduce((sum, items) => sum + items.price, 0);

  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <CartMessage message={message.message} title={message.title} show={show} typ={message.typ}  hiddenMessage={hiddenMessage} />
        <div>
          <OverlayProducts
            items={items}
            totalPrice={totalPrice}
            removeFromCart={deleteProduct}
          />
        </div>
        <Accordion.Header>TV set</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts
                  name="SAMSUNG QE"
                  img={tv1}
                  price={850}
                  addToCart={() => addItem({ name: "SAMSUNG QE", price: 850 })}
                />
              </div>
              <div className="col">
                <CardProducts
                  name="SONY BRAVIA 8 K"
                  img={tv2}
                  price={750}
                  addToCart={() =>
                    addItem({ name: "SONY BRAVIA 8 K", price: 750 })
                  }
                />
              </div>
              <div className="col">
                <CardProducts
                  name="OLED evo LG"
                  img={tv3}
                  price={550}
                  addToCart={() => addItem({ name: "OLED evo LG", price: 550 })}
                />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Consoles</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts
                  name="Playstation 5"
                  img={PlayS5}
                  price={400}
                  addToCart={() =>
                    addItem({ name: "Playstation 5", price: 400 })
                  }
                />
              </div>
              <div className="col">
                <CardProducts
                  name="Xbox X"
                  img={xboxX}
                  price={400}
                  addToCart={() => addItem({ name: "Xbox X", price: 400 })}
                />
              </div>
              <div className="col">
                <CardProducts
                  name="Nintendo"
                  img={nintendo}
                  price={200}
                  addToCart={() => addItem({ name: "Nintendo", price: 200 })}
                />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Laptops</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>PC</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Keyboard</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Headphones</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Cameras</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header> Mobile Phones</Accordion.Header>
        <Accordion.Body>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
              <div className="col">
                <CardProducts />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
