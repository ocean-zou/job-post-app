'use client'

import { Container } from './page.style'
import Hero from '../../components/Hero/Hero'
import Navigation from '../../components/Navigation/Navigation'

export default function LandingPage() {
  return (
    <Container>
      <Navigation />
      <Hero />
    </Container>
  )
}
