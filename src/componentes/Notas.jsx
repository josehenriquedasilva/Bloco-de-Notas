import '../App.css';
import { TrashIcon } from 'lucide-react';

function Notas({notas, excluirNota}) {
    return (
        <div>
            {notas.length > 0 && <h2 className='semNotas'>Suas Notas</h2>}
            {notas.map((nota) => (
                <div className='notasAdd'>
                    <div>
                        <h3 className='tituloNota'>{nota.titulo}</h3>
                        <p className='conteudoNota'>{nota.conteudo}</p>
                    </div>
                    <button className='botaoExcluir' onClick={() => excluirNota(nota.id)}>
                        <TrashIcon />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Notas;