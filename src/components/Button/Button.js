import { StyledButton } from './Button.styles'

export default function Button({
  children,
  href,
  className,
  ...props
}) {
  return (
    <StyledButton
      {...props}
      className={className}
      as={href?.length ? 'a' : 'button'}
      href={href}
    >{children}
    </StyledButton>
  )
}
