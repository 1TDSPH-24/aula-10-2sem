import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TipoProduto } from "../../types";

export default function EditarProdutos() {

    const listaDeProdutosString = localStorage.getItem('lista') || '[]';
    const lista:TipoProduto[] = JSON.parse(listaDeProdutosString);

    const navigate = useNavigate();

    const {id} = useParams();
    
    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: '',
        preco: 0,
    });

    useEffect(() => {
        
        const objSelecionado = lista.find(p=> p.id == Number(id))

        if(objSelecionado){
            setProduto(objSelecionado);
        }

    }, []);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(produto){
        let indiceProduto = lista.findIndex( p => p.id == produto.id );
        lista.splice(indiceProduto,1,produto);
        localStorage.setItem('lista', JSON.stringify(lista));
        alert('Produto editado com sucesso!');
        navigate('/produtos');

      }

    }
    
    return (
        <div>
            <h1>Editar Produtos - {id}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome:</label>
                        <input type="text" name="nome" value={produto?.nome} onChange={(e)=>setProduto({...produto, nome : e.target.value})}/>
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" name="preco" value={produto?.preco} onChange={(e)=>setProduto({...produto, preco : parseFloat(e.target.value)})}/>
                    </div>
                    <div>
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
