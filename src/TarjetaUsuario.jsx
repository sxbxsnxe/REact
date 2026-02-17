function TarjetaUsuario({ usuario, puedeVerDetalle }) {
    const { id, nombre, edad, activo } = usuario;
    const nombreMostrar = nombre ? nombre : "Nombre no registrado";

    return (
    <div style={{border: "1px solid #999", padding: "10px", marginBottom: "8px"}}>
        <p>ID: {id}</p>
        <p>Nombre: {nombreMostrar}</p>
        <p>Edad: {edad}</p>
        <p>Estado: {activo ? "Activo" : "Inactivo"}</p>
        {puedeVerDetalle && <button style={{padding: "5px 10px"}}>Ver detalle</button>}
    </div>
    );
}

export default TarjetaUsuario;
