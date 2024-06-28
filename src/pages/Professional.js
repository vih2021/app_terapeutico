import '../css/Professional.css';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Professional() {
  return (
    <Grid className="Menu" container direction="row" justifyContent="center" alignItems="center">
      <Grid container item x={2} md={2} justifyContent="center"></Grid>
      <Grid container item x={8} md={8} justifyContent="center">
        <div className="Items">
          <div id="itemTitleProfessional">Consulta com profissional especializado</div>
          <Link id="link" to="/iaservice">
            <div id="item">Selecione o profissional desejado</div>
          </Link>
          <Link id="link" to="/professional">
            <div id="item">Iniciar consulta</div>
          </Link>
          <Link id="link" to="/home">
            <div id="itemProfissional">Voltar ao menu principal</div>
          </Link>
        </div>
      </Grid>
      <Grid container item x={2} md={2} justifyContent="center"></Grid>
    </Grid>
  );
}
