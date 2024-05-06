import { Box } from '@mui/material'
import React from 'react'

const BodyBox = ({children, ...otherprops}) => {
  return (
    <Box {...otherprops} sx={{
        border: '2px solid #0096FF',
        borderRadius: '10px',
        width: "clamp(25rem , 40vw, 45rem)",
        height: 'fit-content',
        minHeight: "10rem",
        color: 'white',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: "1rem",
        background: 'linear-gradient(to top right, #101010, #202020)',
        boxShadow: "0px 0px 20px 5px black",
        transitionDuration: '0.2s',
        ":hover": {
            boxShadow: "0px 0px 35px 10px black",
        }
    }}>
        {children}
    </Box>
  )
}

export default BodyBox