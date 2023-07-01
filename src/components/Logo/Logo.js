import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      alt="logo"
      src="./logo.svg"
      width={164}
      height={50}
      priority
    />
  )
}
