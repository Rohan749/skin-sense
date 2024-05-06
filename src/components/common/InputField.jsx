import { Input, TextField } from '@mui/material'
import React from 'react'

const InputField = ({children, ...otherprops}) => {
  return (
    <>
    <TextField {...otherprops} variant='outlined' sx={{
        width: '80%',
    }}>
    {children}
    </TextField>
    </>
  )
}

export default InputField