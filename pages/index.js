import Head from 'next/head'
import Image from 'next/image'

import Share from '../components/Shear'
import Title from '../components/Title'
import { Button } from '@mui/material'
import FooterIcon from '../components/FooterIcon'
import Header from '../components/Header'

export default function Home() {
  return (
    <div> 
      <main>
        <section>
          <h1>React app</h1>
          <p>informacion del proyecto</p>
        </section>
        <section>
          <h1>Resultados</h1>
          <p>Visualización de los datos</p>
        </section>
        <section>
          <h1>Contacto</h1>
          <p>Información de contacto</p>
        </section>
      </main>
      <FooterIcon />
    </div>
  ) 
}
