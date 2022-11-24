export interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

const primaryStyle =
  'inline-flex items-center rounded border border-transparent bg-brand-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
const secondaryStyle =
  'inline-flex items-center rounded border border-transparent bg-brand-100 px-2.5 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'

export function Button(props: ButtonProps) {
  const { variant } = props

  return (
    <button
      type='button'
      className={variant === 'secondary' ? secondaryStyle : primaryStyle}
      {...props}
    >
      {props.children}
    </button>
  )
}

Button.displayName = 'Button'
