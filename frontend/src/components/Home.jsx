//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
import { AppBar, Typography, Container, Grid, Link, Toolbar,} from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin';
import AdbIcon from '@mui/icons-material/Adb';

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
    <AppBar position='static'>
        <Container>
            <Toolbar>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                    //AdbIcon es un componente de la librería '@mui/icons-material/Adb' Elige uno diferente
                        <AdbIcon/>
                        <Typography>{userData.usuario}</Typography>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Link to='/home'>Inicio</Link>
                        </Grid>
                        AÑADIR TANTOS GRID ITEMS COMO SEAN NECESARIOS CON LOS LINKS
                        A LAS PÁGINAS Informes y Ayuda
                        <Grid item xs={12} md={4} lg={3}>
                        <Button variant="contained" onClick = {CerrarSesion}>Salir</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </Container>
    </AppBar>



</>

}

export default Home