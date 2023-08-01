

export const Grados = ({grados, setGrados}) => {

    function noFunciona(){
        alert("Opcion aun no habilitada. Proximamente Disponible en la 1.1")
    }

  return (
    <div className="contenedor-centigrados">
        <button onClick={() => setGrados('metric')} >
        ℃
        </button>
        <button onClick={() => setGrados('imperial')}>
        ℉
        </button>
    </div>
  )
}
