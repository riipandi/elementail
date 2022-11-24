export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: ContainerProps) {
  return <div className={props.className || 'flex flex-col p-2 border'}>{props.children}</div>
}

Container.displayName = 'Container'
