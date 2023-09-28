import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

/* ---------------------------- Estilos globales ---------------------------- */
import './globals.sass'
/* -------------------------------------------------------------------------- */

/* --------------- Componente que renderiza el menu principal --------------- */
import NavBar1 from './components/Navbar1';
/* -------------------------------------------------------------------------- */

/* ---------------------------- Fuente de google ---------------------------- */
const inter = Inter({ subsets: ['latin'] })
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: 'Planificador de menús',
  description: 'Aplicación para crear menús personalizados semanales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar1/>

        {children}
      </body>
    </html>
  )
}
