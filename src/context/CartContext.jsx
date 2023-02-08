import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addPizza = (pizza) => {
    const pizzaInCart = cart.find((inCart) => inCart.id === pizza.id);

    if (pizzaInCart) {
      setCart(
        cart.map((inCart) => {
          if (inCart.id === pizza.id) {
            return { ...pizzaInCart, amount: pizzaInCart.amount + 1 };
          } else return inCart;
        })
      );
    } else {
      setCart([...cart, { ...pizza, amount: 1 }]);
    }
  };
  const removePizza = (pizza) => {
    const pizzaInCart = cart.find((inCart) => inCart.id === pizza.id);
    if (pizzaInCart.amount === 1) {
      setCart(cart.filter((inCart) => inCart.id !== pizza.id));
    } else {
      setCart(
        cart.map((inCart) => {
        if (inCart.id === pizza.id) {
          return { ...pizzaInCart, amount: pizzaInCart.amount - 1 };
        } else return inCart;
      })
      )}};
  const total = () => {
    return cart.reduce((acc, pizza) => acc + pizza.price * pizza.amount, 0);
  };

  const pizzaAmount = (id) => {
    const pizza = cart.find((inCart) => inCart.id === id);
    return pizza ? pizza.amount : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addPizza,
        removePizza,
        total,
        pizzaAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
