import { Container } from '@mui/material'
import React from 'react'

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>{children}</Container>
  )
}

export default ContentProvider