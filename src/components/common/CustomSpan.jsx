import { Box } from '@mui/material'
import React from 'react'

const CustomSpan = ({children}) => {
  return (
    <Box sx={{
        fontWeight:"light"
    }}>{children}</Box>
  )
}

export default CustomSpan