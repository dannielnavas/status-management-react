/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

const UseState = ({ name }) => {
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState("");

  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
  });
  useEffect(() => {
    if (state.loading) {
      // si loading es true entonces se ejecuta el setTimeout
      setTimeout(() => {
        // setLoading(false);

        if (state.value !== SECURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: true,
          });
          // setError(true);
          return;
        }
        setState({
          ...state,
          loading: false,
          error: false,
        });
        // setError(false);
      }, 2000);
    }
  }, [state, state.loading]); // valida cada vez que cambia loading

  return (
    <div>
      <h1>Eliminar {name}</h1>
      <p>Por favor escribe el código de seguridad</p>
      {state.error && !state.loading && <p> Error el código es incorrecto.</p>}
      {state.loading && <p>Cargando...</p>}
      <input
        type="text"
        value={state.value}
        onChange={(event) => setState({ ...state, value: event.target.value })}
        placeholder="Código de seguridad"
      />
      <button onClick={() => setState({ ...state, loading: true })}>
        Comprobar
      </button>
    </div>
  );
};

export { UseState };
