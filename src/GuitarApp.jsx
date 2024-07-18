import { FooterApp } from "./components/FooterApp";
import { HeaderApp } from "./components/HeaderApp";
import { MainApp } from "./components/MainApp";
import { useCart } from "./hooks/useCart";

export const GuitarApp = () => {
  const {
    cart,
    guitar,
    handdleAddCard,
    handdleDecreaseCard,
    handdleRemoveCard,
    handdleResetCart,
  } = useCart();

  return (
    <>
      <HeaderApp
        cart={cart}
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
