import { Grid,Paper} from '@mui/material'
import TopBar from "./TopBar";
import Button from '@mui/material/Button';
import InformesColeccion from './InformeColeccion';
import { useEffect,useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



function Informes() {

  const navigate = useNavigate()
  const userData = useSelector(state => state.login)
  const isLoggedin = userData.isAutenticated

  const [TableData,setTableData] = useState('')
  const [Datos,setDatos] = useState(false)

  useEffect(() => {
    if (!isLoggedin) {
      navigate('/')
    }else{
      fetch(`http://localhost:3030/getItem`)
      .then(response => response.json())
      .then(response => {
          console.log(response)
          if(Object.keys(response.data).length !==0) {
              setTableData(response.data)
          }
      })
    }
  }, [isLoggedin, navigate])

  const data = (e) => {
    setDatos(true)
    console.log(Datos)
  }


    return <>
        <TopBar/>
        
        <Paper>
        <Grid container>
                <Grid item xs={5} md={5}/>
                  <Grid item xs={3} md={3} marginTop={"10px"} marginBottom={"10px"}>
                    <Button variant="contained" color="secondary" onClick={data}>INFORME COLECCION</Button>
                  </Grid>
        </Grid>
        </Paper>

        <Grid container>
                  <Grid item xs={12} md={12} marginTop={"10px"} marginBottom={"10px"}>
                  {Datos && <InformesColeccion AAA = {TableData}/>}
                  </Grid>
        </Grid>


        </>
}

export default Informes