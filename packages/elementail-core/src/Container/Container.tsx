export interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container(props: ContainerProps) {
  return <div className={props.className || 'flex flex-col border p-2'}>{props.children}</div>
}

Container.displayName = 'Container'
