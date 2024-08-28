import ps5 from "../../assets/images/ps5.jpg";
import xbox from "../../assets/images/xbox.jpg";
import nikon from "../../assets/images/nikon.jpg";
import keyboard from "../../assets/images/keyboard.jpg";

export default function IconGridProm() {
  return (
    <div className="container px-4 py-5" id="icon-grid">
      <h3 className="pb-2 border-bottom text-start">OUR LATEST PROMOTIONS</h3>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div className="col d-flex align-items-start">
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={ps5} className="card-img-top" alt="ps5" />
            <div className="card-body">
              <p className="card-text">
                Ps5 and two additional games for{" "}
                <span className="discount_text">free</span>!!!
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={xbox} className="card-img-top" alt="xbox" />
            <div className="card-body">
              <p className="card-text">
                Xbox and two additional games for{" "}
                <span className="discount_text">free</span> !!!
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={nikon} className="card-img-top" alt="nikon" />
            <div className="card-body">
              <p className="card-text">
                Only this month <span className="discount_text">20%</span> off
                on Nikon cameras!!!
              </p>
            </div>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <div className="card" style={{ width: "18rem", height: "18rem" }}>
            <img src={keyboard} className="card-img-top" alt="keyboard" />
            <div className="card-body">
              <p className="card-text">
                <span className="discount_text">10%</span> off selected
                keyboards!!!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
