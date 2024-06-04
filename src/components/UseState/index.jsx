/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (loading) {
      // si loading es true entonces se ejecuta el setTimeout
      setTimeout(() => {
        setLoading(false);
        if (value !== SECURITY_CODE) {
          setError(true);
          return;
        }
        setError(false);
      }, 2000);
    }
  }, [loading]); // valida cada vez que cambia loading

  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor escribe el código de seguridad</p>
      {error && !loading && <p> Error el código es incorrecto.</p>}
      {loading && <p>Cargando...</p>}
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Código de seguridad"
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
};

export { UseState };
