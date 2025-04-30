import './App.css';
import Notas from './componentes/Notas.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  });
  
  const [notas, setNotas] = useState(JSON.parse(localStorage.getItem("notas")) || []);

  function adicionarNota(titulo, conteudo) {
    if (titulo === '' || conteudo === '') {
      alert('Preencha todos os campos!');
      return;
    }
    const novaNota = {
      id: notas.length + 1,
      titulo: titulo,
      conteudo: conteudo,
    };
    setNotas([...notas, novaNota]);
  }

  function excluirNota(id) {
    const novasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(novasNotas);
  }

  return (
    <div className="menu"> 
      <h1 className='titulo'>Bloco de Notas</h1>
      <div className='nota'>
        <input className='caixas' type="text" placeholder="Título da Nota" value={titulo} onChange={(t) => setTitulo(t.target.value)} />

        <textarea className='caixas' rows='5' placeholder='Conteúdo da Nota...' value={conteudo} onChange={(c) => setConteudo(c.target.value)}></textarea>

        <button className='botao' onClick={() => {
          adicionarNota(titulo, conteudo);
          setTitulo('');
          setConteudo('');
        }}>Adicionar Nota</button>
        <Notas notas={notas} excluirNota={excluirNota}/>
      </div>
    </div>
  );
}

export default App;