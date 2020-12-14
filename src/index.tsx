import * as React from 'react'
import { Button } from './styles/button'

export interface BackgroundButtonProps {
  /* Button background image, can be a URL or file imported as string. */
  image: string
  /* Background size mode (contain, cover) */
  mode?: 'auto' | 'cover' | 'contain'
  /* Additional styles applied directly to the Button component. */
  customStyles?: React.CSSProperties
  /* Button Width */
  width?: number
  /* Button Height */
  height?: number
  /* OnClickButton Handler */
  onClick?: () => void
}

export const BackgroundButton: React.FC<
  BackgroundButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  customStyles,
  image,
  mode = 'auto',
  width = 200,
  height = 40,
  onClick,
  children
}) => {
  return (
    <Button
      type='button'
      onClick={onClick}
      style={customStyles}
      bg={image}
      width={width}
      height={height}
      size={mode}
    >
      {children}
    </Button>
  )
}
