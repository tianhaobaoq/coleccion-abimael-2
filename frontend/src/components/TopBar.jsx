import { Grid,AppBar, Typography, Container, Toolbar} from '@mui/material'
import { useNavigate,Link} from 'react-router-dom'
import AttractionsIcon from '@mui/icons-material/Attractions';
import AdbIcon from '@mui/icons-material/Adb';import Table from '@mui/material/Table';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { loginActions } from '../store/storelogin';


function TopBar() {

    const userData = useSelector(state => state.login)
    const isLoggedin = userData.isAutenticated
    const navigate = useNavigate()
    const dispatch = useDispatch();
  
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
                        {userData.userRol === 'admin' ?
                        <AttractionsIcon />
                        : <AdbIcon/>
                        }
                        <Typography sx={{ display: 'inline', fontSize: '24px' }}>{userData.userName}</Typography>
                        </Grid>
        
                        <Grid item container xs={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                        <Link to='/home'>Inicio</Link>
                        </Grid>
        
        
                        {userData.userRol === 'admin' &&
                        <Grid item container xs={3} md={3} lg={2} xl={2} sx={{alignContent:'center'}}>
                        <Link to='/informes'>Informes</Link>
                        </Grid>
                        }

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
        </>
    );
    
}

export default TopBar
