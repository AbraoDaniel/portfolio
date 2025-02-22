 
import React, { useState } from 'react'
import { createContext } from 'use-context-selector'

interface PageContextProps {
  isLightMode: boolean
  setIsLightMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextProps>(
  {} as PageContextProps
)

export const PageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(false)

  return (
    <PageContext.Provider
      value={{
        isLightMode,
        setIsLightMode
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
