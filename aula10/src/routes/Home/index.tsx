

export default function Home() {

    return (
        <div>Home</div>
    );
}


// <div>
// {users.map(user => (
//     <div key={user.id}>
//         <img src={user.avatar_url} alt={user.login} />
//         <p>{user.login}</p>
//     </div>
//     ))}
// </div>

// fetch('https://api.github.com/users')
// .then(response => {
//     if (!response.ok) throw new Error('Erro ao gerar os dados');
//     return response.json();
// })
// .then(data => {
//     setUsers(data) 
// })
// .catch(err => {
//     setError(err.message);
//     navigate('/error');
// })