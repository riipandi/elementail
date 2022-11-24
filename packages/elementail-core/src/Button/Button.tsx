import { FC } from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

// export function Button(props: ButtonProps) {
export const Button: FC<ButtonProps> = (props) => {
  return <button>{props.children}</button>
}

Button.displayName = 'Button'
