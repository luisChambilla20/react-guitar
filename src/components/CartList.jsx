import { CartItem } from "./CartItem";

export const CartList = ({
  cart,
  handdleRemoveCard,
  handdleAddCard,
  handdleDecreaseCard,
}) => {
  return (
    <>
      <table className="w-100 table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handdleRemoveCard={handdleRemoveCard}
              handdleAddCard={handdleAddCard}
              handdleDecreaseCard={handdleDecreaseCard}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
