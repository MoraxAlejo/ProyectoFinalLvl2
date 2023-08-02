

export const Grados = ({grados, setGrados}) => {

    function noFunciona(){
        alert("Opcion aun no habilitada. Proximamente Disponible en la 1.1")
    }

  return (
    <div className="contenedor-centigrados">
        <button onClick={() => setGrados('metric')} >
        <p className="text-grados">℃</p>
        </button>
        <button className="text-grados-f" onClick={() => setGrados('imperial')}>
        <p>℉</p>
        </button>
    </div>
  )
}
