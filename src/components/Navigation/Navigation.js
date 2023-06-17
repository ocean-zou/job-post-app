import Image from 'next/image'
import { StyleNavigation } from './Navigation.style'

export default function Navigation() {
  return (
    <StyleNavigation>
      <Image alt="logo" src="./logo.svg" width={164} height={50} />
    </StyleNavigation>
  )
}
