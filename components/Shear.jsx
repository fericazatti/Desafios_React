
// Importacion de librerias
import React from 'react'
import { 
    FacebookIcon, FacebookShareButton,    
} from "react-share";

function Shear() {
    // Zona de logica

    const shareURL = 'http://127.0.0.1:8000/';    

    return (
        <> 
            <FacebookShareButton url={shareURL}>                                                            
                <FacebookIcon />
            </FacebookShareButton>
        </>        
    )
}

export default Shear
