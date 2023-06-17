import Image from 'next/image'
import {
  HeroComponent,
  InfoContainer,
  Title,
  Description,
  HeroImageContainer,
} from './Hero.style'
import Button from '../Button/Button'

export default function Hero() {
  return (
    <HeroComponent>
      <InfoContainer>
        <Title>Job<span> Tracking </span>App</Title>
        <Description className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum beatae laboriosam rerum eligendi nihil a ex illo amet iusto ullam et sed nam enim distinctio, quibusdam, quidem rem itaque aliquid?</Description>
        <Button href="#1">Login/Register</Button>
      </InfoContainer>
      <HeroImageContainer className="hero-image">
        <Image src="./hero.svg" alt="hero" fill priority={false} />
      </HeroImageContainer>
    </HeroComponent>
  )
}
