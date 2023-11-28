import Link from 'next/link'

function Navbar() {
    return (
        <nav className='bg-slate-600 m-4 p-2'>
          <ul className='flex gap-4'>
            <li>
              <Link href='http://localhost:3000/tienda'>Shop</Link>
            </li>
            <li>
              <Link href='http://localhost:3000/'>Home</Link>
            </li>
            <li>
              <Link href='http://localhost:3000/about'>About</Link>
            </li>
            <li>
              <Link href='http://localhost:3000/users'>Users</Link>
            </li>
          </ul>
        </nav>
    );
};

export default Navbar;