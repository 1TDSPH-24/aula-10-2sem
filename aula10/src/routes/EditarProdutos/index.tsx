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
            <p>NOME : {produto.nome}</p>
        </div>
    );
}
