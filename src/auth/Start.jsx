import "./Start.css";
import React, { useState } from "react";
import { usuarios } from "../database/database";

const Start = () => {
  const [buscarNombre, setNombre] = useState("");
  const [buscarDestino, setDestino] = useState("");
  const [buscarValorViaje, setValor] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "nombre") {
      setNombre(value);
    } else if (name === "destino") {
      setDestino(value);
    } else if (name === "valor") {
      setValor(value);
    }
  };

  const filtrarNombres = usuarios.filter((usuario) =>
    usuario.nombreCliente.toLowerCase().includes(buscarNombre.toLowerCase())
  );

  const filtrarLugares = usuarios.filter((usuario) =>
    usuario.destinoViaje.toLowerCase().includes(buscarDestino.toLowerCase())
  );

  const filtrarValor = usuarios.filter((usuario) =>
    usuario.valorViaje
      .toString()
      .toLowerCase()
      .includes(buscarValorViaje.toLowerCase())
  );

  return (
    <form className="Inicio">
      <header>
        <h2>Agencia Viajes</h2>
      </header>
      <div className="input-group">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Buscar..."
          value={buscarNombre}
          onChange={handleChange}
        />
        <ul>
          {filtrarNombres.map((usuario, index) => (
            <li key={index}>
              {usuario.nombreCliente} - {usuario.destinoViaje} -{" "}
              {usuario.valorViaje} - {usuario.cantidadPersonas}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group">
        <label htmlFor="destino">Destino</label>
        <input
          type="text"
          name="destino"
          placeholder="Buscar..."
          value={buscarDestino}
          onChange={handleChange}
        />
        <ul>
          {filtrarLugares.map((usuario, index) => (
            <li key={index}>
              {usuario.nombreCliente} - {usuario.destinoViaje} -{" "}
              {usuario.valorViaje} - {usuario.cantidadPersonas}
            </li>
          ))}
        </ul>
      </div>
      <div className="input-group">
        <label htmlFor="valor">Valor</label>
        <input
          type="text"
          name="valor"
          placeholder="Buscar..."
          value={buscarValorViaje}
          onChange={handleChange}
        />
        <ul>
          {filtrarLugares.map((usuario, index) => (
            <li key={index}>
              {usuario.nombreCliente} - {usuario.destinoViaje} -{" "}
              {usuario.valorViaje} - {usuario.cantidadPersonas}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Start;
