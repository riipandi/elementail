export interface ButtonProps {
  children: React.ReactNode
  className?: string
}

export function Button(props: ButtonProps) {
  return <button className={props.className}>{props.children}</button>
}

Button.displayName = 'Button'
