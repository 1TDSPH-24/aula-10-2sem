import { useEffect, useState } from "react";
import { MinhaTabela } from "../../style/styled";
import { TipoProduto } from "../../types";

export default function Produtos() {

    const listaDeProdutos:TipoProduto[] = [
        {id: 1, nome: 'Cachorro Quente', preco: 3},
        {id: 2, nome: 'X-Burguer', preco: 5},
        {id: 3, nome: 'Hambúrguer', preco: 4},
        {id: 4, nome: 'Refrigerante', preco: 2}
    ];

    const [usuarios, setUsuarios] = useState<TipoProduto[]>([{
        id: 0,
        nome: '',
        preco:0
    }])

    useEffect(()=>{
      
        if(!localStorage.getItem('lista')){
            localStorage.setItem('lista', JSON.stringify(listaDeProdutos));
        }

        const listaDeProdutosString = localStorage.getItem('lista') || '[]';
        const lista:TipoProduto[] = JSON.parse(listaDeProdutosString);
        
        setUsuarios(lista);
    },[])

    return (
        <div>
            <h1>Produtos</h1>
            <MinhaTabela>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(p=>(
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td><button>Editar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total em Produtos: R$ {usuarios.reduce((ac, p) => ac + p.preco, 0)} - 
                        Total de registros : {usuarios.length}</td>
                    </tr>
                </tfoot>
            </MinhaTabela>
        </div>
    );
}
