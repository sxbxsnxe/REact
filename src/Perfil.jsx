function Perfil({nombre, edad, ciudad}) {
    return (
    <div style={{border: "1px solid #ccc", padding: "8px", marginBottom: "8px"}}>
    <p>Nombre: {nombre}</p>
    <p>Edad: {edad}</p>
    <p>Ciudad: {ciudad ? ciudad : "Ciudad no registrada"}</p>
    </div>
    )
}

export default Perfil;
