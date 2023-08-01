export const Card = (props, datos) => {
  return (
    <div className="container-smallcards">
      <div className="container-next-day">
      <p>Tomorrow</p>
      <div className="contenedor-snow">
        {" "}
        <img src={props.image} />{" "}
      </div>
      <div className="temperatura">
        <p>16°C</p>
        <p>11°C</p>
      </div>
     </div>
    </div>
  );
};
