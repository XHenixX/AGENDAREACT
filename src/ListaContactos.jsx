import React from 'react';

const ListaContactos = ({ contactos }) => {
    return (
        <div>
            <h2>Listado de Contactos</h2>
            <ul>
                {contactos.map((contacto, index) => (
                    <li key={index}>
                        {contacto.nombre} {contacto.apellido} - {contacto.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaContactos;
