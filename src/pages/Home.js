import '../css/home.css'
import { Grid, Icon } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home(){

    return(
        <>
            <Grid className="Menu" container direction="row" justifyContent="center" alignItems="center">
                <Grid container item x={2} md={2} justifyContent="center"></Grid>   
                    <Grid container item x={8} md={8} justifyContent="center">
                        <div className='Items'>
                            <div id="itemTitle">Área do Paciente</div>
                            <Link id='link' to='/iaservice'><div id="item">Consultas com Inteligência Artificial</div></Link>
                            <div id="itemTitle">Área Compartilhada</div>
                            <div id="item">Consultas com Profissional Especializado</div>
                            <div id="item">Relatório do Paciente</div>
                            <div id="itemTitle">Área do Profissional</div>
                            <div id="itemProfissional">Relatório by Inteligência Artificial</div>
                        </div>
                    </Grid>
                <Grid container item x={2} md={2} justifyContent="center"></Grid>                 
            </Grid>
        </>
    )
}