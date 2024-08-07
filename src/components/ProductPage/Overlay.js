import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";

export default function OverlayProducts({ items }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div className="overlay_container">
      <Button
        className="button_basket"
        variant="danger"
        ref={target}
        onClick={() => setShow(!show)}
      >
        {" "}
        Basket <span className="items_lenght">{items.length}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 18 18"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            className="overlay_container"
            {...props}
            style={{
              position: "absolute",
              backgroundColor: "rgba(255, 100, 100, 0.85)",
              padding: "2px 10px",
              color: "white",
              borderRadius: 3,
              ...props.style,
            }}
          >
            {items.length > 0 ? (
              <ul>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>
                        {index + 1} {item.name}-{item.price}£
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Your shopping cart is empty!</p>
            )}
          </div>
        )}
      </Overlay>
    </div>
  );
}
