/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const onConfirm = () => {
  //   setState({
  //     ...state,
  //     loading: false,
  //     error: false,
  //     confirmed: true,
  //   });
  // };

  // const onError = () => {
  //   setState({
  //     ...state,
  //     loading: false,
  //     error: true,
  //   });
  // };

  // const onWrite = (newValue) => {
  //   setState({ ...state, value: newValue });
  // };

  // const onCheck = () => {
  //   setState({ ...state, loading: true });
  // };

  // const onDelete = () => {
  //   setState({ ...state, deleted: true });
  // };

  // const onReset = () => {
  //   setState({ ...state, deleted: false, confirmed: false, value: "" });
  // };

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          dispatch({ type: "ERROR" });
          return;
        }
        dispatch({ type: "CONFIRM" });
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
          onChange={(event) =>
            dispatch({ type: "WRITE", payload: event.target.value })
          }
          placeholder="Código de seguridad"
        />
        <button onClick={() => dispatch({ type: "CHECK" })}>Comprobar</button>
      </div>
    );
  }
  if (!state.deleted && state.confirmed) {
    return (
      <div>
        <h1>Eliminar {name}</h1>
        <p>¿Estás seguro de eliminar {name}?</p>
        <button onClick={() => dispatch({ type: "DELETE" })}>Sí</button>
        <button onClick={() => dispatch({ type: "RESET" })}>No</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{name} ha sido eliminado</h1>
      <button onClick={() => dispatch({ type: "RESET" })}>Volver</button>
    </div>
  );
};

const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// const reducerIf = (state, action) => {
//   if (action.type === "ERROR") {
//     return {
//       ...state,
//       loading: false,
//       error: true,
//     };
//   }
//   if (action.type === "CONFIRM") {
//     return {
//       ...state,
//       loading: false,
//       confirmed: true,
//     };
//   }
//   if (action.type === "WRITE") {
//     return {
//       ...state,
//       value: action.payload,
//     };
//   }
//   if (action.type === "CHECK") {
//     return {
//       ...state,
//       loading: true,
//     };
//   }
//   if (action.type === "DELETE") {
//     return {
//       ...state,
//       deleted: true,
//     };
//   }
//   if (action.type === "RESET") {
//     return {
//       ...state,
//       deleted: false,
//       confirmed: false,
//       value: "",
//     };
//   }
//   return state;
// };

// const reducerSwitch = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };
//     case "CONFIRM":
//       return {
//         ...state,
//         loading: false,
//         confirmed: true,
//       };
//     case "WRITE":
//       return {
//         ...state,
//         value: action.payload,
//       };
//     case "CHECK":
//       return {
//         ...state,
//         loading: true,
//       };
//     case "DELETE":
//       return {
//         ...state,
//         deleted: true,
//       };
//     case "RESET":
//       return {
//         ...state,
//         deleted: false,
//         confirmed: false,
//         value: "",
//       };
//     default:
//       return state;
//   }
// };

const reducerObject = (state, action) => ({
  ERROR: {
    ...state,
    loading: false,
    error: true,
  },
  CONFIRM: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  WRITE: {
    ...state,
    value: action.payload,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
    ...state,
    deleted: false,
    confirmed: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state, action)[action.type]) {
    return reducerObject(state, action)[action.type];
  }
  return state;
};

export { UseReducer };
