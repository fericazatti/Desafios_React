import React from 'react'
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';

function ContactIcons(props) {
    
    return (
    <div>
        <Facebook color={props.colorIcon} sx={{ fontSize: Number(props.size) }}/>
        <GitHub color={props.colorIcon} sx={{ fontSize: Number(props.size) }}/>
        <LinkedIn color={props.colorIcon} sx={{ fontSize:  Number(props.size) }}/>
    </div>
  )
}

export default ContactIcons
