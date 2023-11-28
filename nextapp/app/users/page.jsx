"use-client"
import User from "../components/User";
import Boton from "../components/Boton";

const url = 'https://reqres.in/api/users'

async function getUsers() {
    const result = await fetch(url);

    const js = await result.json();

    console.log(js);

    return js.data;
}

async function Users() {
    const users = await getUsers();
    
    return (
        <div>
            <h1>USERS:</h1>
            <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max">
                {users.map((user) => <User key={user.id} name={user.first_name} last_name={user.last_name} email={user.email} url={user.avatar}/>)}
            </div>
            <Boton/>
        </div>
    );
}

export default Users;