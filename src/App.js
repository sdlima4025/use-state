import { useState } from 'react';
import './App.css';



function App() {

  const [endereco, setEndereco] =useState({})

  const [enderecos, setEnderecos] = useState([])

  function manipularEndereco (evento) {

    const cep = evento.target.value
    setEndereco({
      cep
    })

    if (cep && cep.length === 8) {
      // obter cep

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(resposta => resposta.json())
      .then(dados => {

        setEnderecos(lista => [...lista, endereco]) //spread ex: ...lista


        setEndereco(enderecoAntigo => {
          return{
            ...enderecoAntigo,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
            gia: dados.gia,
            siafi: dados.siafi
          }
        })
      })
    }

  }

  return (
    <div className="App">
      <header className="App-header">
      <input placeholder='Digite o CEP' onChange={manipularEndereco}>
      </input>
      <ul>
        <li>CEP: {endereco.cep}</li>
        <li>Bairro: {endereco.bairro}</li>
        <li>Cidade: {endereco.cidade}</li>
        <li>Estado: {endereco.estado}</li>
        <li>Gia: {endereco.gia}</li>
        <li>Siafi: {endereco.siafi}</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
