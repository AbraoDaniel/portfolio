import { useContextSelector } from 'use-context-selector'
import { PageContext } from '../contexts/PageContext.tsx/index.tsx'

export function usePage() {
  const isLightMode = useContextSelector(
    PageContext,
    page => page.isLightMode
  )

  const setIsLightMode = useContextSelector(
    PageContext,
    page => page.setIsLightMode
  )
  
  return {
    isLightMode,
    setIsLightMode,
  }
}
