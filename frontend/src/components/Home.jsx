//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
import { Grid,Paper,Box,TextField} from '@mui/material'
import { useEffect,useState} from 'react'
import { useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Home() {
    const userData = useSelector(state => state.login)
    const isLoggedin = userData.isAutenticated
    const navigate = useNavigate()
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (!isLoggedin) {
        navigate('/')
      }
      handleGetItem()

    }, [isLoggedin, navigate])


    const [item, setItem] = useState({nombre: '',marca: '',tipo: '',precio: ''})
    const [tableData, setTableData]   = useState([])


    const handleSaveItem = async (e) => {
          e.preventDefault();
    
          const response = await fetch(`http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)

          const data = await response.json()
  
          if (data>0) {
              handleGetItem()
              alert('Item guardado correctamente')
              item.nombre = ""
              item.marca = ""
              item.tipo = ""
              item.precio = ""

            } else {
              alert('Item NO guardado ')
            }
    };




    const handleDeleteItem = async (e) => {

      const response = await fetch(`http://localhost:3030/deleteItem?id=${e}`)

      const data = await response.json()

      if (data>0) {
          alert('Item borrado correctamente')
          handleGetItem()

          if (tableData.length === 1) {
            setTableData([]);
          }
        } else {
          alert('Item NO borrado ')
        }
    };


    const handleGetItem = async (e) => {
      const response = await fetch(`http://localhost:3030/getItem`)
      .then(response => response.json())
      .then(response => {
          console.log(response)
          if(Object.keys(response.data).length !==0) {
              setTableData(response.data)
          }
      })
    };

    console.log(tableData)

  
    return (
      <>

        <Paper>
            <Box>
                <Grid container marginTop={'20px'}>
                    <Grid item xs={3} md={3} marginTop={'10px'} marginBottom={'10px'}>

                        <TextField
                        label='Nombre'
                        required
                        value={item.nombre}
                        onChange={(event) => setItem({...item, nombre: event.target.value })}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3} marginTop={'10px'} marginBottom={'10px'}>
                        <TextField
                        label='Marca'
                        value={item.marca}
                        onChange={(event) => setItem({...item, marca: event.target.value })}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3} marginTop={'10px'} marginBottom={'10px'}>
                        <TextField
                        label='Tipo'
                        value={item.tipo}
                        onChange={(event) => setItem({...item, tipo: event.target.value })}
                        >
                        </TextField>
                    </Grid>

                    <Grid item xs={3} md={3} marginTop={'10px'} marginBottom={'10px'}>
                        <TextField
                        label='Precio'
                        value={item.precio}
                        onChange={(event) => setItem({...item, precio: event.target.value })}
                        >
                        </TextField>
                    </Grid>

                  <Grid item xs={5} md={5}/>
                  <Grid item xs={3} md={3} marginBottom={'10px'}>
                    <Button variant="contained" color="secondary" onClick={handleSaveItem} type='submit'>Insertar</Button>
                  </Grid>


                    
                </Grid>

              
            </Box>
        </Paper>

      
        <TableContainer sx={{ border: '1px solid black', marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell sx={{ color: 'black', border: '1px solid black' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'black', border: '1px solid black' }}>Marca</TableCell>
              <TableCell sx={{ color: 'black', border: '1px solid black' }}>Tipo</TableCell>
              <TableCell sx={{ color: 'black', border: '1px solid black' }}>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} sx={{ border: '1px solid black' }}>



                {userData.userRol === 'admin' ?
                <Button onClick={() => handleDeleteItem(row.id)}>
                  <DeleteForeverIcon />
                </Button>
                : 
                <Button sx={{backgroundColor: 'gray', 
                color: 'white', 
                cursor: 'not-allowed'}}>
                  <DeleteForeverIcon />
                </Button>
                }


                <TableCell sx={{ color: 'black', border: '1px solid black' }}>{row.nombre}</TableCell>
                <TableCell sx={{ color: 'black', border: '1px solid black' }}>{row.marca}</TableCell>
                <TableCell sx={{ color: 'black', border: '1px solid black' }}>{row.tipo}</TableCell>
                <TableCell sx={{ color: 'black', border: '1px solid black' }}>{row.precio}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>





      </>
    );
  }
  
  export default Home;
  
  