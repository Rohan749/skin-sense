import { Box } from '@mui/material'
import React from 'react'

const Header = ({children}) => {
  return (
    <Box sx={{
        // color: "white",
        fontSize: "2rem",
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%'
    }}>
        {children}
    </Box>
  )
}

export default Header