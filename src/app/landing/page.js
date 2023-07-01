'use client'

import { Container } from './page.style'
import Hero from '../../components/Hero/Hero'
import Navigation from '../../components/Navigation/Navigation'
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
