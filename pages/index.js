import Head from 'next/head'
import Image from 'next/image'

import Share from '../components/Shear'
import Title from '../components/Title'
import { Button } from '@mui/material'
import FooterIcon from '../components/FooterIcon'
import Header from '../components/Header'
import Card_1 from '../components/Card_1'
import { StyledEngineProvider } from '@mui/material/styles';

// sas

export default function Home() {
  return (
    <div> 
      <main>
      <section class="hero">
            <div class="hero-inner">
                <h1>My awesome website</h1>
                <h2>Look at this website and bask in its amazing glory!</h2>
                <a href="https://example.com/" class="btn">Go ahead...</a>
            </div>
        </section>
        <section class="card">
          {/* <StyledEngineProvider injectFirst> */}
            <Card_1 />          
          {/* </StyledEngineProvider> */}
          
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
