import CartItem from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, total } = useCartContext();

  return (
    <div>
      <h6 className="text-start my-5">Detalles del pedido</h6>
      <ul className="list-group">
        {cart.map((pizza) => (
          <CartItem key={pizza.id} info={pizza} />
        ))}

        {cart.length === 0 && (
          <li className="list-group-item text-center">
            <b>El carro está vacío</b>
          </li>
        )}
        <li className="list-group-item list-group-item-action active text-end">
          <b>Total: ${total()}</b>
        </li>
      </ul>
    </div>
  );
}
