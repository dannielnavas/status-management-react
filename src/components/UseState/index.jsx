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
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({ ...state, deleted: false, confirmed: false, value: "" });
  };

  useEffect(() => {
    if (state.loading) {
      // si loading es true entonces se ejecuta el setTimeout
      setTimeout(() => {
        // setLoading(false);

        if (state.value !== SECURITY_CODE) {
          // setState({
          //   ...state,
          //   loading: false,
          //   error: true,
          // });
          onError();
          // setError(true);
          return;
        }
        onConfirm();
        // setError(false);
      }, 2000);
    }
  }, [state, state.loading]); // valida cada vez que cambia loading

  if (!state.confirmed && !state.deleted) {
    return (
      <div>
        <h1>Eliminar {name}</h1>
        <p>Por favor escribe el código de seguridad</p>
        {state.error && !state.loading && <p> Error el código es incorrecto.</p>}
        {state.loading && <p>Cargando...</p>}
        <input
          type="text"
          value={state.value}
          onChange={(event) => onWrite(event.target.value)}
          placeholder="Código de seguridad"
        />
        <button onClick={() => onCheck()}>Comprobar</button>
      </div>
    );
  }
  if (!state.deleted && state.confirmed) {
    return (
      <div>
        <h1>Eliminar {name}</h1>
        <p>¿Estás seguro de eliminar {name}?</p>
        <button onClick={() => onDelete()}>Sí</button>
        <button onClick={() => onReset()}>No</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{name} ha sido eliminado</h1>
      <button onClick={() => onReset()}>Volver</button>
    </div>
  );
};

export { UseState };
