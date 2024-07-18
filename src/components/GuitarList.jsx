import { GuitarItem } from "./GuitarItem";

export const GuitarList = ({ guitar, handdleAddCard }) => {
  return (
    <div className="row mt-5">
      {guitar.map((unid) => (
        <GuitarItem key={unid.id} unid={unid} handdleAddCard={handdleAddCard} />
      ))}
    </div>
  );
};
