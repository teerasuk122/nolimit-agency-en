'use client'

import { useEffect, useState } from 'react'

export default function HydrationCleanup() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Clean up browser extension attributes that might cause hydration mismatch
    const cleanupAttributes = () => {
      const body = document.body
      if (body) {
        // Get all attributes
        const attributes = Array.from(body.attributes)
        
        // Remove any attributes that match problematic patterns
        attributes.forEach(attr => {
          // Remove __processed_*__ attributes
          if (attr.name.startsWith('__processed_') && attr.name.endsWith('__')) {
            body.removeAttribute(attr.name)
          }
          // Remove cz-shortcut-listen attribute (ColorZilla extension)
          if (attr.name === 'cz-shortcut-listen') {
            body.removeAttribute(attr.name)
          }
          // Remove other common extension attributes
          if (attr.name.includes('extension') || 
              attr.name.includes('addon') || 
              attr.name.includes('plugin') ||
              attr.name.includes('chrome-extension') ||
              attr.name.match(/^[a-f0-9-]{36}$/)) {
            body.removeAttribute(attr.name)
          }
        })
      }
    }

    // Clean up immediately
    cleanupAttributes()
    
    // Set up observer to clean up any future additions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === document.body) {
          const attrName = mutation.attributeName
          if (attrName && 
              (attrName.startsWith('__processed_') || 
               attrName === 'cz-shortcut-listen' ||
               attrName.includes('extension') || 
               attrName.includes('addon') ||
               attrName.includes('chrome-extension'))) {
            document.body.removeAttribute(attrName)
          }
        }
      })
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: undefined
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return null
  }

  return null
} 