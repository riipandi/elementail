import * as RadixAvatar from '@radix-ui/react-avatar'
import './styles.css'

export interface AvatarProps {
  src: string
  alt: string
  className?: string
}

export function Avatar(props: AvatarProps) {
  return (
    <RadixAvatar.Root className='AvatarRoot'>
      <RadixAvatar.Image className='AvatarImage' {...props} />
      <RadixAvatar.Fallback className='AvatarFallback' delayMs={600}>
        JD
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

Avatar.displayName = 'Avatar'
