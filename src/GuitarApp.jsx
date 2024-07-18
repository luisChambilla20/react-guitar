import { useEffect, useState } from "react";
import { FooterApp } from "./components/FooterApp";
import { HeaderApp } from "./components/HeaderApp";
import { MainApp } from "./components/MainApp";
import { db } from "../src/db/db";

export const GuitarApp = () => {
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

  const totalPrice = () => {
    return cart.reduce(
      (total, guitar) => total + guitar.price * guitar.quantity,
      0
    );
  };

  const handdleResetCart = () => {
    setCart([]);
  };

  return (
    <>
      <HeaderApp
        cart={cart}
        totalPrice={totalPrice}
        handdleRemoveCard={handdleRemoveCard}
        handdleAddCard={handdleAddCard}
        handdleDecreaseCard={handdleDecreaseCard}
        handdleResetCart={handdleResetCart}
      />

      <MainApp guitar={guitar} cart={cart} handdleAddCard={handdleAddCard} />

      <FooterApp />
    </>
  );
};
