import './User.css'

const User = ({ name, last_name, email, url }) => {
    return (
    <div className='user p-3 m-2'>
        <img src={url} className='user-avatar'></img>
        <div className='user-data border-2 p-1 rounded w-40 ml-5 h-32'>
            <p className='user-data-full-name'>{name} {last_name}</p>
            <p className='user-data-email'>{email}</p>
        </div>
    </div>
    );
}

export default User;