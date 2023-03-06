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
  const [cadastro, setCadastro] = useState(null);

  function handleChange(event) {
    setCpf(event.target.value);
    if (event.target.value.length === 11) {
      setBotaoHabilitado(true);
    } else {
      setBotaoHabilitado(false);
    }
  }

  function handleCadastro(cadastro) {
    setCadastro(cadastro);
  }

  
  return (
    <>
    
    <form onSubmit={
      event => {
        event.preventDefault();
        handleCadastro({ nome, sobrenome, cpf, promocoes, novidades });
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        cpf.replace(/[^\d]/g, '')
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
        type='text'
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

    {cadastro && (
      <div>
        <p>Nome: {cadastro.nome}</p>
        <p>Sobrenome: {cadastro.sobrenome}</p>
        <p>CPF: {cadastro.cpf}</p>
        <p>Promoções: {cadastro.promocoes ? 'Sim' : 'Não'}</p>
        <p>Novidades: {cadastro.novidades ? 'Sim' : 'Não'}</p>
      </div>
    )}
    </>
  );
}



export default FormularioCadastro;