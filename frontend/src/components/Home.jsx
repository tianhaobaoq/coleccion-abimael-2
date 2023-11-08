//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin';

function Home() {

//Almacenamos en la variable userData el estado del store
const userData = useSelector(state => state.login)
const usuario = userData.usuario

//Trozo de código donde vamos a usar el useEffect(): siempre los hooks van al principio del componente
const isLoggedin = userData.isAutenticated
const navigate = useNavigate()
useEffect(() => {
if (!isLoggedin) {
navigate('/')
}
}, [isLoggedin, navigate])


//Función para el boton
const dispatch = useDispatch();
const CerrarSesion = () => {
    dispatch(loginActions.logout())
    navigate('/')    
}


//Comprobamos por la consola qué obtenemos en userData
console.log(userData)

return <>

<Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>Página home de Abimael López Jiménez</Typography>
<Typography variant="h2" component="h3" sx={{ textAlign: 'center' }}>Nombre de usuario: {userData.userName} | Rol: {userData.userRol}</Typography>
<Button variant="contained" color="secondary" sx={{ marginLeft: '10px',marginTop:'700px' }} onClick={CerrarSesion}>Back</Button>



</>

}

export default Home