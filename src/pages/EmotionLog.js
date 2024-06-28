import '../css/EmotionLog.css';
import { Grid, Input, InputLabel, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';


export default function EmotionLog() {
  return (
    <Grid className="Menu" container direction="row" justifyContent="center" alignItems="center">
      <Grid container item x={2} md={2} justifyContent="center"></Grid>
      <Grid container item x={8} md={8} justifyContent="center">
        <div className="Items">
          <div id="itemTitleEmotionLog">Relatório emoções</div>
          <div className="input-container">
            <InputLabel>Alegria</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Tristeza</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Raiva</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Medo</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Ansiedade</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Inveja</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Tédio</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <InputLabel>Vergonha</InputLabel>
            <Input type="text" placeholder="Descreva essa emoção" />
          </div>
          <div className="input-container">
            <TextareaAutosize
              style={{
                width: '100%',
                height: '160px',
                padding: '16px',
                borderRadius: '8px'
              }}
              placeholder="Descreva aqui o que mais você está sentindo, ou conte como foi seu dia"
            />
          </div>
          <Link id="link" to="#">
            <div id="itemRelatorio">Salvar</div>
          </Link>
        </div>
      </Grid>
      <Grid container item x={2} md={2} justifyContent="center"></Grid>
    </Grid>
  );
}
