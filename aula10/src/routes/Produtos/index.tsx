import { useEffect, useState } from "react"
import { TipoProdutos } from "../../types";
import { Link } from "react-router-dom";

const Produtos = ()=>{

    const listaDeProdutos:TipoProdutos[] = [
        {id: 1, nome: 'Cachorro Quente', preco: 3},
        {id: 2, nome: 'X-Burguer', preco: 5},
        {id: 3, nome: 'Hambúrguer', preco: 4},
        {id: 4, nome: 'Refrigerante', preco: 2}
    ];
    const [usuarios,setUsuarios] = useState<TipoProdutos[]>([{
        id:0,
        nome:'',
        preco:0
    }])

    useEffect(()=>{
        if(localStorage.getItem('lista')){
            localStorage.setItem('lista', JSON.stringify(listaDeProdutos))
        }
        const listaDeProdutosString = localStorage.getItem('lista') || '[]';
        const lista : TipoProdutos[] = JSON.parse(listaDeProdutosString);
        setUsuarios(lista)
    },[])
    return(
        <div>
            <h1>Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>nome</th>
                        <th>preco</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(produtos=>(
                        <tr key={produtos.id}>
                            <td>{produtos.nome}</td>
                            <td>{produtos.preco}</td>
                            <td><Link to={`/editar/produtos/${produtos.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td colSpan={3}>Total em Produtos: R$ {usuarios.reduce((ac,p) => ac+p.preco, 0)}
                        Total de Registros:{usuarios.length}</td>
                </tfoot>
            </table>
        </div>
    )
}

export default Produtos