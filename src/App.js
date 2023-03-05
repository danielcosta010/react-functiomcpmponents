import { Container, Typography } from '@mui/material';
import './App.css';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';

import '@fontsource/roboto/400.css';



function App() {
  return (
    <Container maxWidth='sm' component='article'>
      <Typography variant='h3' component='h1' textAlign='center'>   
        Formulário de cadastro
      </Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
