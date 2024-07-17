import Products from "./Products";
import headphones from "../assets/images/headphone.jpg";
import watch from "../assets/images/watch.jpg";
import computer from "../assets/images/computer.jpg";

export default function Cart() {
  return (
    <div class="container">
      <h3 className="pb-2 border-bottom text-start">Most popular products</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Products
          img={headphones}
          name="headphone"
          price="24.99 £"
          description="Sony WH-CH520 Wireless"
        />
        <Products
          img={watch}
          name="watch"
          price="140.50 £"
          description="Samsung Galaxy Watch7, Smart Watch"
        />
        <Products
          img={computer}
          name="computer"
          price="350 £"
          description="Dell Inspiron 14 5440 Laptop 14"
        />
      </div>
    </div>
  );
}
