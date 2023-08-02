export const Card = (props) => {
  const celsiusMin = Math.round(props.datos?.main.temp_min - 273.15);
  const celsiusMax = Math.round(props.datos?.main.temp_max - 273.15);

  return (
    <div className="container-smallcards">
      <div className="container-next-day">
        <p>{props.text}</p>
        <div className="contenedor-snow">
          {" "}
          <img src={props.image} />{" "}
        </div>
        <div className="temperatura">
          <p>{celsiusMin}°C</p>
          <p>{celsiusMax}°C</p>
        </div>
      </div>
    </div>
  );
};