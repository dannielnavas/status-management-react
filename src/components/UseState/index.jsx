/* eslint-disable react/prop-types */
import { useState } from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor escribe el código de seguridad</p>
      {error && <p> Error el código es incorrecto.</p>}
      <input type="text" placeholder="Código de seguridad" />
      <button onClick={() => setError(!error)}>Comprobar</button>
    </div>
  );
};

export { UseState };
