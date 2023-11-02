import { useState } from "react";
import Card from "./Card";

const Formulario = () => {

  const [nombre, setNombre] = useState("");
  const [fruta, setFruta] = useState("");
  const [card, setCard] = useState(false);

  const handleOnChange = (e) => {

    e.preventDefault();

    if (nombre.trim().length >= 3 && fruta.trim().length >= 6) {
      setCard(true);
      console.log(`${fruta}, es el fruta favorita de ${nombre}`);

    } else {
      setCard(false);
      alert("Por favor chequea que la información sea correcta")
    }
  };

  return (
    <>
      <form onSubmit={handleOnChange}>
        <input
          type="text"
          placeholder=" Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Ingresa tu fruta favorita"
          id="fruta"
          value={fruta}
          onChange={e => setFruta(e.target.value)}
        /> 
        <input type="submit" value="Enviar" />
        {!card ? null : <Card nombre={nombre} fruta={fruta} />}
      </form>
    </>
  );
};

export default Formulario;
