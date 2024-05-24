/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const UseState = ({ name }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      // si loading es true entonces se ejecuta el setTimeout
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 2000);
    }
  }, [loading]); // valida cada vez que cambia loading

  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor escribe el código de seguridad</p>
      {error && <p> Error el código es incorrecto.</p>}
      {loading && <p>Cargando...</p>}
      <input type="text" placeholder="Código de seguridad" />
      <button onClick={() => setLoading(!loading)}>Comprobar</button>
    </div>
  );
};

export { UseState };
