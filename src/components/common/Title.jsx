import { Box } from '@mui/material'
import React from 'react'

const Title = ({children}) => {
    return (
      <Box sx={{
          // color: "white",
          fontSize: "1rem",
          fontWeight: 'bold',
          pb: '1rem'
      }}>
          {children}
      </Box>
    )
  }

export default Title