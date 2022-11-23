
import { useEffect } from 'react';
import Nav from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import '../styles/globals.css'
// // import '../styles/css/bootstrap.min.css'
// // import '../styles/css/owl.carousel.min.css'
// import '../styles/css/style.css'

// import "../css/customcss.css";


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap.js')
  }, []);

  return (
    <>
      <Nav />

      <Component {...pageProps} />      
      
    </>
  )
}

export default MyApp
