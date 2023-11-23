async function getUser(params) {
    
}

async function Hola ({ params }) {
    const url = "https://reqres.in/api/users/"

    const result = await fetch(url + params.id);
    const user = await result.json();

    return (
        <div className="sm:columns-2 md:columns-2 lg:columns-3 gap-6 mx-auto px-4">
            <img src={user.data.avatar} className="aspect-square"></img>
            <div className="container bg-red-400 lg:w-48 justify-center">
                <p className="text-center">{user.data.first_name}</p>
                <p className="text-center break-after-column">{user.data.last_name}</p>
            </div>
            <div className="container bg-green-300 lg:w-50">
                <p className="text-center">{user.data.email}</p>
            </div>
        </div>
    );
}

export default Hola;