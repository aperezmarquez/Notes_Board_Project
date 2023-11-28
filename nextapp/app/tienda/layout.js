import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Aladin } from "next/font/google" 

const aladin = Aladin({
    weight: ["400"],
    styles: ["italic", "normal"],
    subsets: ["latin"]
})

const inter = Inter({ subsets: ['latin'] })

export default function TiendaLayout({ children }) {
  return (
    <div className={aladin.className}>
        <nav className='bg-slate-600 m-4 p-2 w-16'>
          <ul>
            <li>
              <Link href='http://localhost:3000/tienda/deporte'>Deportes</Link>
            </li>
            <li>
              <Link href='http://localhost:3000/tienda/hogar'>Hogar</Link>
            </li>
            <li>
              <Link href='http://localhost:3000/tienda/muebles'>Muebles</Link>
            </li>
          </ul>
        </nav>{children}
    </div>
  )
}