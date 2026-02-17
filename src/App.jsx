import SaludoUsuario from "./SaludoUsuario.jsx";
import Perfil from "./Perfil.jsx";
import TarjetaUsuario from "./TarjetaUsuario.jsx";

function App() {
  // ejercicio 1
  const nombre = "Juan";
  const ciudad = "Bogotá";
  const anio = 2026;

  // ejercicio 2 - calcular la edad
  const calcularEdad = (anioNac) => {
    const edad = anio - anioNac;
    return edad;
  }

  // ejercicio 3
  const mensajeEstado = (activo) => {
    if (activo) {
      return <span>Activo</span>
    }
    return <span>Inactivo</span>
  }

  // ejercicio 4 - productos
  const productos = [
    {id: 1, nombre: "Laptop", precio: 800, stock: 5},
    {id: 2, nombre: "Mouse", precio: 25, stock: 0},
    {id: 3, nombre: "Teclado", precio: 75, stock: 3}
  ]

  // ejercicio 8
  const logueado = true;
  const rol = "admin";

  // ejercicio 9
  const notificaciones = ["Tienes un nuevo mensaje", "Tu pedido fue entregado"];
  const mostrarNotificaciones = true;

  // ejercicio 10
  const usuarios = [
    {id: 1, nombre: "Carlos", edad: 25, activo: true},
    {id: 2, nombre: "", edad: 30, activo: true},
    {id: 3, nombre: "Ana", edad: 16, activo: true},
    {id: 4, nombre: "Miguel", edad: 28, activo: false}
  ]

  const puedeVerDetalle = (usuario) => {
    if (usuario.activo && usuario.edad >= 18) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <h1>Taller React - 10 Ejercicios</h1>

      <div style={{border: "1px solid #999", padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 1</h3>
        <p>Hola, soy {nombre} de {ciudad} y estamos en {anio}.</p>
      </div>

      <div style={{padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 2 - Edades</h3>
        <p>Persona nacida en 2000: {calcularEdad(2000)} años</p>
        <p>Persona nacida en 1995: {calcularEdad(1995)} años</p>
        <p>Persona nacida en 2010: {calcularEdad(2010)} años</p>
      </div>

      <div style={{border: "2px solid black", padding: "8px", marginBottom: "10px"}}>
        <h3>Ejercicio 3</h3>
        <p>Estatus: {mensajeEstado(true)}</p>
        <p>Estatus: {mensajeEstado(false)}</p>
      </div>

      <div style={{marginBottom: "10px"}}>
        <h3>Ejercicio 4 y 5 - Productos</h3>
        {productos.map((prod) => (
          <div key={prod.id} style={{border: "1px solid gray", padding: "10px", marginBottom: "5px"}}>
            <p>{prod.nombre}</p>
            <p>Precio: ${prod.precio}</p>
            <p>
              {prod.stock > 0 ? <span>Disponible</span> : <span>Agotado</span>}
            </p>
          </div>
        ))}
      </div>

      <div style={{border: "1px solid #999", padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 6 - Saludos</h3>
        <SaludoUsuario mensaje="Hola" nombre="Juan" />
        <SaludoUsuario mensaje="Buenos días" nombre="María" />
        <SaludoUsuario mensaje="Bienvenido" nombre="Pedro" />
      </div>

      <div style={{border: "1px solid #ccc", padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 7 - Perfiles</h3>
        <Perfil nombre="Ana" edad={28} ciudad="Medellín" />
        <Perfil nombre="Luis" edad={32} ciudad="" />
        <Perfil nombre="Sofia" edad={25} />
      </div>

      <div style={{padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 8</h3>
        <p>
          {!logueado ? "Inicie sesión" : rol === "admin" ? "Panel Admin" : "Panel Usuario"}
        </p>
      </div>

      <div style={{border: "1px solid #666", padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 9 - Notificaciones</h3>
        {mostrarNotificaciones && notificaciones.length > 0 ? (
          <ul>
            {notificaciones.map((notif, i) => (
              <li key={i}>{notif}</li>
            ))}
          </ul>
        ) : (
          <p>No hay notificaciones</p>
        )}
      </div>

      <div style={{padding: "10px", marginBottom: "10px"}}>
        <h3>Ejercicio 10 - Usuarios</h3>
        {usuarios.map((user) => (
          <TarjetaUsuario key={user.id} usuario={user} puedeVerDetalle={puedeVerDetalle(user)} />
        ))}
      </div>
    </div>
  );
}

export default App;