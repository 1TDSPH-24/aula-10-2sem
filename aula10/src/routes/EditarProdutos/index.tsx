import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TipoProduto } from "../../types";

export default function EditarProdutos() {

    const {id} = useParams();
    
    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: '',
        preco: 0,
    });

    useEffect(() => {
        
        const listaDeProdutosString = localStorage.getItem('lista') || '[]';
        const lista:TipoProduto[] = JSON.parse(listaDeProdutosString);

        const objSelecionado = lista.find(p=> p.id == Number(id))

        if(objSelecionado){
            setProduto(objSelecionado);
        }

    }, [])
    
    return (
        <div>
            <h1>Editar Produtos - {id}</h1>
            <div>
                <form>
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
