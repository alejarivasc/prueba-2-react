import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { total } = useCartContext();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MamaMía 😋
        </NavLink>
        <div className="d-flex gap-2">
          <NavLink className="btn btn-outline-light" to="/pizzas">
            Pizzas
          </NavLink>
          <NavLink className="btn btn-outline-info me-2" to="/cart">
            Cart: ${total()}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
