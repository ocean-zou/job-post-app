import Image from 'next/image'
import { StyledNavigation, DrawerToggleButton, NavTitle } from './Navigation.styles'
import Button from '../Button/Button'

export default function Navigation() {
  return (
    <StyledNavigation>
      <DrawerToggleButton>
        <Image src="fold.svg" width={32} height={32} />
      </DrawerToggleButton>
      <NavTitle>Dashboard</NavTitle>
      <Button
        startIcon="/profile.svg"
        endIcon="/downChevron.svg"
      >
        Ocean
      </Button>
    </StyledNavigation>
  )
}
