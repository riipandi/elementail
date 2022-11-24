export interface ButtonProps {
  children: React.ReactNode
  className?: string
}

export function Button(props: ButtonProps) {
  const defaultClassName =
    'inline-flex items-center rounded border border-transparent bg-brand-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
  return <button className={props.className || defaultClassName}>{props.children}</button>
}

Button.displayName = 'Button'
