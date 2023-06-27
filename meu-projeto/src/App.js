import logo from './logo.svg';
import './App.css';
import HellWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'

function App() {
  // const name = 'Yan'
  // const lastName = 'Palmer'
  // const venceu = 'Win!'
  // function soma(a, b) {
  //   return a + b
  // }
  const nome = "Elton" // SayMyName nome={nome}
  return (
    <div className="App">
      {/* <h1>Texto escrito em JSX</h1>
      <p>Olá! Seu nome é {name} {lastName}</p>
      <p>Parabéns, you {venceu.toUpperCase()}</p>
      <p>Soma: {soma(2,4)}</p> */}
      <h1>Teste de cor CSS</h1>
      <HellWorld />
      <SayMyName nome="Yan" />
      <SayMyName nome={nome} />
      <Pessoa foto="https://via.placeholder.com/150" nome="Joãozin" idade="25" profissão="Programador" />
    </div>
  );
}

export default App;
