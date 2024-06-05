const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// const reducer = (state, action) => {

// }

const reducerIf = (state, action) => {
  if (action.type === "ERROR") {
    return {
      ...state,
      loading: false,
      error: true,
    };
  }
  if (action.type === "CONFIRM") {
    return {
      ...state,
      loading: false,
      confirmed: true,
    };
  }
  if (action.type === "WRITE") {
    return {
      ...state,
      value: action.payload,
    };
  }
  if (action.type === "CHECK") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "DELETE") {
    return {
      ...state,
      deleted: true,
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      deleted: false,
      confirmed: false,
      value: "",
    };
  }
  return state;
};

const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CONFIRM":
      return {
        ...state,
        loading: false,
        confirmed: true,
      };
    case "WRITE":
      return {
        ...state,
        value: action.payload,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };
    case "DELETE":
      return {
        ...state,
        deleted: true,
      };
    case "RESET":
      return {
        ...state,
        deleted: false,
        confirmed: false,
        value: "",
      };
    default:
      return state;
  }
};

const reducerObject = (state, action) => ({
  ERROR: {
    ...state,
    loading: false,
    error: true,
  },
  CONFIRM: {
    ...state,
    loading: false,
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
