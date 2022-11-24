export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: ContainerProps) {
  return (
    <div
      className={props.className || 'flex min-h-screen flex-col items-center justify-center py-2'}
    >
      {props.children}
    </div>
  )
}

Container.displayName = 'Container'
