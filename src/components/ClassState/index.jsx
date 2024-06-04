/* eslint-disable react/prop-types */
import { Component } from "react";

const SECURITY_CODE = "paradigma";

class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  UNSAFE_componentWillMount() {
    console.log("ComponentWillMount");
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");

    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
        if (this.state.value !== SECURITY_CODE) {
          this.setState({ error: true });
          return;
        }
        this.setState({ error: false });
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor escribe el código de seguridad</p>

        {this.state.error && !this.state.loading && (
          <p> Error el código es incorrecto.</p>
        )}
        {this.state.loading && <p>Cargando...</p>}

        <input
          type="text"
          placeholder="Código de seguridad"
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button onClick={() => this.setState({ loading: true })}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
