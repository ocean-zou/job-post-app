'use client'

import { Container, Navigation } from './page.styles'
import Hero from '../../components/Hero/Hero'
import Logo from '../../components/Logo/Logo'
import { useAppContext } from '@/context/appContext'

export default function LandingPage() {
  const { state } = useAppContext()
  console.log(state)
  return (
    <Container>
      <Navigation>
        <Logo />
      </Navigation>
      <Hero />
    </Container>
  )
}
