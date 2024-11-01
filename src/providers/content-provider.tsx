import React from 'react'

const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>{children}</div>
  )
}

export default ContentProvider