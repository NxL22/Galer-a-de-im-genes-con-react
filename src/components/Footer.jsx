import  Button  from 'react-bootstrap/Button';

const Footer = () => {

    const mostrarAlerta = () => {
        alert("¡Cuidado, criaturas peligrosas🐉! Mejor conócelos desde la seguridad de tu pantalla🧑‍💻");
    };

    return(
        <div className="contenedor">
            <br />
            <hr />
            <h2>
            ¡Bienvenido al <strong>Top 7</strong> de los animales más venenosos del mundo! 
            Descubre a estas criaturas tan peligrosas que preferirías admirarlas
            desde la seguridad de tu pantalla. Desde la serpiente Taipán hasta
            el escorpión de cola gorda, estos animalitos malvados te 
            sorprenderán con su belleza y peligrosidad, ¡como la de tu ex! 😂
            </h2>
            <button type="button" className="btn btn-dark" onClick={mostrarAlerta}>
                <strong>¡Cuidadoo Con Estos animalitos! 🧟</strong>
            </button>
        </div>
    );
};

export default Footer;
