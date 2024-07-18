import { GuitarList } from "./GuitarList";

export const MainApp = ({ guitar, handdleAddCard }) => {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <GuitarList guitar={guitar} handdleAddCard={handdleAddCard} />
    </main>
  );
};
