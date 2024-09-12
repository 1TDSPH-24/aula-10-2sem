import { MinhaTabela } from "../../style/styled";

export default function Produtos() {

    const listaDeProdutos = [
        {id: 1, nome: 'Cachorro Quente', preco: 3},
        {id: 2, nome: 'X-Burguer', preco: 5},
        {id: 3, nome: 'Hambúrguer', preco: 4},
        {id: 4, nome: 'Refrigerante', preco: 2}
    ];

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
                    {listaDeProdutos.map(p=>(
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td><button>Editar</button></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total em Produtos: R$ {listaDeProdutos.reduce((ac, p) => ac + p.preco, 0)} - 
                        Total de registros : {listaDeProdutos.length}</td>
                    </tr>
                </tfoot>
            </MinhaTabela>
        </div>
    );
}
