import React from 'react'
import '../styles/Home.module.css'
import Box from "@mui/material/Box";
import { createSvgIcon } from "@mui/material/utils";

function Title() {
   let App = 'Aplicación React'
   const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home"
  );  
  return (    
    <div> 
            <Box
                sx={{
                    "& > :not(style)": {
                    m: 1
                    }
                }}
            >
                <HomeIcon color="secondary" />
            </Box>      
            {/* <Box>
                <h1>{App}</h1>
            </Box>         */}
    </div>
  )
}

export default Title
