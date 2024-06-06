/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

const UseReducer = ({ name }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onConfirm = () => {
    dispatch({ type: actionTypes.CONFIRM });
  };

  const onError = () => {
    dispatch({ type: actionTypes.ERROR });
  };

  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.WRITE, payload: value });
  };

  const onCheck = () => {
    dispatch({ type: actionTypes.CHECK });
  };

  const onDelete = () => {
    dispatch({ type: actionTypes.DELETE });
  };

  const onReset = () => {
    dispatch({ type: actionTypes.RESET });
  };

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
          return;
        }
        onConfirm();
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
          // onChange={(event) => onWrite(event.target.value)}
          onChange={onWrite}
          placeholder="Código de seguridad"
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  }
  if (!state.deleted && state.confirmed) {
    return (
      <div>
        <h1>Eliminar {name}</h1>
        <p>¿Estás seguro de eliminar {name}?</p>
        <button onClick={onDelete}>Sí</button>
        <button onClick={onReset}>No</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{name} ha sido eliminado</h1>
      <button onClick={onReset}>Volver</button>
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

const actionTypes = {
  ERROR: "ERROR",
  CONFIRM: "CONFIRM",
  WRITE: "WRITE",
  CHECK: "CHECK",
  DELETE: "DELETE",
  RESET: "RESET",
};

const reducerObject = (state, action) => ({
  [actionTypes.ERROR]: {
    ...state,
    loading: false,
    error: true,
  },
  [actionTypes.CONFIRM]: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  [actionTypes.WRITE]: {
    ...state,
    value: action.payload,
  },
  [actionTypes.CHECK]: {
    ...state,
    loading: true,
  },
  [actionTypes.DELETE]: {
    ...state,
    deleted: true,
  },
  [actionTypes.RESET]: {
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
