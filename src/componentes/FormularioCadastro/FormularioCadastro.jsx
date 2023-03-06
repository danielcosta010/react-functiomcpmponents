import React, { useState } from 'react';

import { Button, FormControlLabel, Switch, TextField } from '@mui/material';


function FormularioCadastro({ aoEnviar, validaCPF }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' }})
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);

  function handleChange(event) {
    setCpf(event.target.value);
    if (event.target.value.length === 11) {
      setBotaoHabilitado(true);
    } else {
      setBotaoHabilitado(false);
    }
  }

  return (
    <form onSubmit={
      event => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
      }
    }>

      <TextField
        value={nome}
        onChange={event => setNome(event.target.value)}
        id="nome"
        label="Nome"
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />

      <TextField
        value={sobrenome}
        onChange={event => setSobrenome(event.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin='normal'
        fullWidth
        required
        
      />

      <TextField
        value={cpf}
        onChange={handleChange}
        onBlur={() => {
          const ehValido = validaCPF(cpf)
          setErros({ cpf: ehValido })
          
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        type='number'
        margin='normal'
        fullWidth
        required
      />


      <FormControlLabel
        control={<Switch
          checked={promocoes}
          onChange={event => setPromocoes(event.target.checked)}
          size='small'
        />}
        label="Promoções"
      />

      <FormControlLabel
        control={<Switch
          checked={novidades}
          onChange={event => setNovidades(event.target.checked)}
          size='small'
        />}
        label="Novidades"
      />

      <Button 
        variant="contained" 
        type='submit' 
        disabled={!botaoHabilitado}
      >
        Cadastrar
      </Button>
    </form>
  );
}



export default FormularioCadastro;