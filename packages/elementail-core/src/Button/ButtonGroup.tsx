export interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
}

export function ButtonGroup({ ...props }: ButtonGroupProps) {
  return (
    <span className='isolate inline-flex rounded-md shadow-sm' {...props}>
      {/* {props.children} */}
      <button
        type='button'
        className='focus:border-primary-500 focus:ring-primary-500 relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1'
      >
        Years
      </button>
      <button
        type='button'
        className='focus:border-primary-500 focus:ring-primary-500 relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1'
      >
        Months
      </button>
      <button
        type='button'
        className='focus:border-primary-500 focus:ring-primary-500 relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1'
      >
        Days
      </button>
    </span>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
