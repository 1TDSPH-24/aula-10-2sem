import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TipoProdutos } from "../../types";

export default function EditarProdutos() {
  
    const listaDeProdutosString  = localStorage.getItem('lista')||'[]';
    const lista:TipoProdutos[] = JSON.parse(listaDeProdutosString);
    const {id} = useParams();

    const navigate = useNavigate();

    const [produto, setProduto] = useState<TipoProdutos>({
        id:0,
        nome:'',
        preco:0
    });


    useEffect(()=>{
        


        const objSelecionado = lista.find(p=> p.id == Number(id))
        if(objSelecionado){
            setProduto(objSelecionado)
        }
    },[])

    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        if(produto){
            let indiceProduto = lista.findIndex(p => p.id == produto.id)
            lista.splice(indiceProduto,1,produto)
            localStorage.setItem('lista', JSON.stringify(lista))
            navigate("/produtos")
        }
    }

    return (
        <div>
            <h1>Editar Principal - {id}</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={produto?.nome} onChange={(e)=>setProduto({...produto, nome : e.target.value})}/>
                    <label>Preco</label>
                    <input type="text" name="nome" value={produto?.nome} onChange={(e)=>setProduto({...produto, preco : parseFloat(e.target.value)})}/>
                    <button type="submit">Editar</button>
                </form>
            </div>
        </div>
    );
}
