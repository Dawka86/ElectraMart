import Header from "./Header";
import IconGridProm from "./IconGridProm";
import Jumbotron from "./Jumbotron";
import Cart from "./Cart";
import CartButton from "./CartButton";
import IconGrid from "./IconGrid";

export default function Main() {
  return (
    <>
      <Header />
      <CartButton />
      <Jumbotron />
      <Cart />
      <IconGridProm />
      <IconGrid />
    </>
  );
}
