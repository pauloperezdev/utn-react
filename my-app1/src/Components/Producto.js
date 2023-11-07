import React, { useState } from "react";

const Producto = () => {

    // Variables para mostrar varios productos, inicializadas con un ejemplo
    const [Nombre, setNombre] = useState('Mouse');
    const [Descripcion, setDescripcion] = useState('Dispositivo periférico');
    const [Precio, setPrecio] = useState('1500');
    const [SKU, setSKU] = useState('m001');
    const [Cantidad, setCantidad] = useState('20');

    const anterior = () => {        
        alert('Anterior Producto')
        setNombre("Anterior")
    }

    const siguiente = () => {
        alert('Siguiente Producto') 
        setNombre("Siguiente")
    }

    return ( 
        <div>
            <div className="FichaProducto">
                <p>Nombre: <b>{Nombre}</b></p>
                <p>Descripcion: <b>{Descripcion}</b></p>
                <p>Precio: <b>{Precio}</b></p>
                <p>SKU: <b>{SKU}</b></p>
                <p>Cantidad disponible: <b>{Cantidad}</b></p>
                <button onClick={anterior}>Anterior</button>&nbsp;
                <button onClick={siguiente}>Siguiente</button>
            </div>
        </div>
     );
}
 
export default Producto
