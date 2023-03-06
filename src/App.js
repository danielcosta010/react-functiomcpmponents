import '@fontsource/roboto/400.css';

import { Container, Typography } from '@mui/material';
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro';


function aoEnviarForm(dados) {
  console.log(dados);
}

function validaCPF(cpf) {
  if (cpf.length !== 11) {
    return {valido: false, texto: 'Cpf deve ter 11 números, sem pontos ou traços'};
  } else {
    return {valido: true, texto: ''};
  }
}


function App() {
  return (
    <Container maxWidth='sm' component='article'>
      <Typography variant='h3' component='h1' textAlign='center'>
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validaCPF={validaCPF}/>
    </Container>
  );
}

export default App;
