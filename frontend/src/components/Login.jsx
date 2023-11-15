import React,{useState} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../store/storelogin';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  

  // Manejar el envío del formulario
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log (usuario, contraseña)
    if (usuario.length !== 0 && contraseña.length !== 0 ){
        fetch(`http://localhost:3030/login?user=${usuario}&password=${contraseña}`)
        .then(response => response.json())
        .then(response => { 
            if (response){
                if(Object.keys(response.data).length === 0){
                    alert('Datos introducidos incorrectos')
                    console.log('Datos incorrectamente') 
                }else {
                    console.log(response)
                    if (response.data !== undefined) {
                        console.log('Dispatch')
                        //aquí pongo el dispatch para cambiar el estado a login en el store del redux
                        dispatch(loginActions.login({
                        name: response.data.nombre,
                        rol: response.data.rol
                        }))
                        navigate('/home')
                    }            
                        
                }
            }
        })
        console.log (`http://localhost:3030/login?user=${usuario}&password=${contraseña}`)
    } else{
        console.log ('Campos vacios.')

    }
}



  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box onSubmit={handleSubmit} component={'form'}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '500px',
              minWidth: '500px',
              marginLeft: '-170px', // Centra horizontalmente
            }}
          >
            <Paper elevation={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: 'primary.main'
                  }}
                >
                  <img
                    src="https://images.vexels.com/media/users/3/136536/isolated/preview/dfaceaf15c56b7ac1d1985f24588ae30-icono-de-candado-degradado.png" // Reemplaza con la ruta de tu imagen de avatar
                    alt="Avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Avatar>
                <Typography variant="h6" component="h1" sx={{ textAlign: 'center' }}>
                  Acceder
                </Typography>
              </Box>
              <TextField required fullWidth id="usuario" variant="outlined" label="Usuario" sx={{marginBottom:'10px'}} onChange={(e) => { setUsuario(e.target.value) }} />
              <TextField required fullWidth id="contraseña" variant="outlined" label="Contraseña" type="password" sx={{ marginBottom: '10px' }} onChange={(e) => { setContraseña(e.target.value) }} />
              <Button variant="contained" color="secondary" fullWidth sx={{ marginBottom: '10px' }} type='submit'>
                Iniciar Sesión
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
