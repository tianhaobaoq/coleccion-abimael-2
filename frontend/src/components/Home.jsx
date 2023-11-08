//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
import { AppBar, Typography, Container, Grid, Toolbar,} from '@mui/material'
import { useEffect } from 'react'
import { useNavigate,Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin';
import AttractionsIcon from '@mui/icons-material/Attractions';

function Home() {
    const userData = useSelector(state => state.login)
    const isLoggedin = userData.isAutenticated
    const navigate = useNavigate()
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (!isLoggedin) {
        navigate('/')
      }
    }, [isLoggedin, navigate])
  
    const CerrarSesion = () => {
      dispatch(loginActions.logout())
      navigate('/')    
    }
  
    return (
      <>
        <AppBar position='static'>
          <Container>
            <Toolbar>
              <Grid container justifyContent="space-between">
                <Grid item container xs={3} sm={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                  <AttractionsIcon />
                  <Typography sx={{ display: 'inline', fontSize: '24px' }}>{userData.userName}</Typography>
                </Grid>
  
                <Grid item container xs={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                  <Link to='/home'>Inicio</Link>
                </Grid>
  
                <Grid item container xs={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                  <Link to='/informes'>Informes</Link>
                </Grid>
  
                <Grid item container xs={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                  <Link to='/ayuda'>Ayuda</Link>
                </Grid>
  
                <Grid item container xs={3} md={3} lg={2} xl={3} justifyContent="flex-end">
                  <Button variant="contained" color="secondary" onClick={CerrarSesion}>Salir</Button>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>

        <Paper AÑADIR PROPIEDADES>
            <Box component='form' autoComplete='off' onSubmit={handleSaveItem} >
                <Grid container AÑADIR PROPIEDADES>
                    <Grid item xs={X} md={X}>
                        <TextField
                        label='Nombre'
                        required
                        value={item.nombre}
                        /*Cuando el usuario escriba algo en el TextField nombre, se irá almacenando en el
                        atributo nombre del objeto item*/
                        onChange={(event) => setItem({...item, nombre: event.target.value })}
                        >
                        </TextField>
                    </Grid>
                    //AÑADIR LOS DEMÁS ELEMENTOS DEL FORMULARIO: los TextField y el Button
                    //El Button debe de ser de type='submit' porque es un formulario
                </Grid>
            </Box>
        </Paper>







      </>
    );
  }
  
  export default Home;
  
  