import React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

interface AspectRatioProps {
  ratio?: number
  children: React.ReactNode
  className?: string
}

export const AspectRatio = ({ ratio = 1, children, className }: AspectRatioProps) => {
  return (
    <AspectRatioPrimitive.Root ratio={ratio} className={className}>
      {children}
    </AspectRatioPrimitive.Root>
  )
}

export default AspectRatio
