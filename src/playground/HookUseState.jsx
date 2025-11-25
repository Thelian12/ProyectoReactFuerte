import { useState } from "react";
import { Link } from "react-router-dom";

function Contador() { 
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useState("red");
    const [padding, setPadding] = useState(20);

    function aumentar() {
        setCount(count + 1);
    }

    function disminuir() {
        setCount(count - 1);
    }

    function cambiarColor () {
        setColor(color === "red" ? "blue" : "red");
    }


    function cambiarPadding() {
        setPadding(padding === 20 ? 40 : 20);
    }


    return (
        <div className="container text-center">
            <h1>Contador {count}</h1>

            {/* Bloque con funciones normales */}
            <div className="btn-group">
                <button className="btn btn-success" onClick={aumentar}>
                    Aumentar
                </button>

                <button className="btn btn-danger" onClick={disminuir}>
                    Disminuir
                </button>
            </div>

            <br />

            {/* Bloque con funciones dentro del botón */}
            <div className="btn-group">
                <button
                    onClick={() => setCount(count + 1)}
                    className="btn btn-success"
                >
                    Aumentar
                </button>

                <button
                    onClick={() => setCount(count - 1)}
                    className="btn btn-danger"
                >
                    Disminuir
                </button>
            </div>

            <br />

            <div className="container text-center mt-4">

                <button className="btn btn-primary" onClick={() => setVisible(!visible)}>
                    {visible ? "Ocultar" : "Mostrar"} Texto
                </button>
                <br /><br />

                {/* Contenido que se muestra/oculta */}
                {visible && <div className="alert alert-info"> Ahora soy visible! 👀</div>}
                
            </div>

            <br />

{/* Cambiar color de texto */}
            <div className="container text-center mt-4">
            <h1 style={{ color: color }}>
                Texto con color dinámico
            </h1>

            <button
                className="btn btn-primary"
                onClick={cambiarColor}
            >
                Cambiar color
            </button>
        </div>


        {/* Cambiar color al width */}
        <div className="container text-center mt-4">
            
        </div>
        
<div
                style={{
                    backgroundColor: color,
                    padding: padding,
                    color: "white",
                    borderRadius: "10px",
                    transition: "0.3s"
                }}
            >
                <h2> Caja con estilos dinámicos </h2>
                <p>Color: {color}</p>
                <p>Padding: {padding}px</p>
            </div>

            <br />

            <button
                className="btn btn-primary me-2"
                onClick={cambiarColor}
            >
                Cambiar color
            </button>

            <button
                className="btn btn-success"
                onClick={cambiarPadding}
            >
                Cambiar padding
            </button>

            <Link to="/">Volver atrás</Link>


        </div>


    )
};

export default Contador;
