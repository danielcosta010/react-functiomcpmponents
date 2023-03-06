import React, { useState } from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material';


function FormularioCadastro() {
  const [nome, setNome] = useState('')
  

  function guardaNome(event) {
    let nomeTemp = event.target.value
    if(nomeTemp.length >= 3)
    nomeTemp = nomeTemp.substr(0, 3)
    
    setNome(nomeTemp) 
  }

  
  return (
    <form onSubmit={
      event => {
        event.preventDefault();
        console.log(nome)
      }
    }>

      <TextField
        value={nome}
        onChange={guardaNome}
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