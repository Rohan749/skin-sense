import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({children, ...otherprops}) => {
  return (
    <Button variant='contained' sx={{
        backgroundColor: '#0096ff'
    }} {...otherprops}>
        {children}
    </Button>
  )
}

export default CustomButton