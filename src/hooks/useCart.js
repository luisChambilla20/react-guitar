import { useEffect, useState } from "react";
import { db } from "../db/db";

export const useCart = () => {
  const [guitar, setGuitar] = useState(db);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  //ONTIENE LOS DATOS DEL LOCALSTORAGE
  useEffect(() => {
    //SE GUARDAN LOS DATOS EN LOCALSTORAGE
    localStorage.setItem("cart", JSON.stringify(cart));

    // setCart(JSON.parse(localStorage.getItem("guitar")) || []);
  }, [cart]);

  const handdleAddCard = (newGuitar) => {
    const exist = cart.findIndex((guitar) => guitar.id === newGuitar.id);

    if (exist >= 0) {
      const copyCart = [...cart];
      copyCart[exist].quantity += 1;
      setCart(copyCart);
      return;
    }

    newGuitar.quantity = 1;
    setCart([...cart, newGuitar]);
  };

  const handdleRemoveCard = (id) => {
    const newCart = cart.filter((guitar) => guitar.id !== id);
    setCart(newCart);
  };

  const handdleDecreaseCard = (id) => {
    const exist = cart.findIndex((guitar) => guitar.id === id);

    if (exist >= 0 && cart[exist].quantity > 1) {
      const copyCart = [...cart];
      copyCart[exist].quantity -= 1;
      setCart(copyCart);
    } else {
      handdleRemoveCard(id);
    }
  };

  const handdleResetCart = () => {
    setCart([]);
  };

  return {
    cart,
    guitar,
    handdleAddCard,
    handdleDecreaseCard,
    handdleRemoveCard,
    handdleResetCart,
  };
};
