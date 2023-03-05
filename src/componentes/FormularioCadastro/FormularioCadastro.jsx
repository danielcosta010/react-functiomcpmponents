import React from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material';

function FormularioCadastro() {
  let nome = '';
  return (
    <form>

      <TextField 
      onChange={event => {console.log(event.target.value);}}
        id="nome" 
        label="Nome" 
        variant="outlined" 
        margin='normal' 
        fullWidth 
      />

      <TextField 
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        margin='normal' 
        fullWidth 
      />

      <TextField 
        id="cpf" 
        label="CPF" 
        variant="outlined" 
        type='number'
        margin='normal' 
        fullWidth 
      />

      
      <FormControlLabel 
        control={<Switch defaultChecked size='small' />} 
        label="Promoções" 
      />

      <FormControlLabel 
        control={<Switch defaultChecked size='small' />} 
        label="Novidades" 
      />
     
      <Button variant="contained" type='submit'>
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;