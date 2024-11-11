import React, { useState } from 'react';

const FormularioContacto = ({ onAgregarContacto }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nombre && apellido && telefono) {
      onAgregarContacto({ nombre, apellido, telefono });
      setNombre('');
      setApellido('');
      setTelefono('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Contacto</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit">Guardar Contacto</button>
      </form>
    </div>
  );
};

export default FormularioContacto;
