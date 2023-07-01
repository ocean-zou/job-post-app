import { useEffect } from 'react'

export default function Redirecting() {
  useEffect(() => {
    window.location.replace(`${window.location.origin}/register`)
  }, [])
  return (
    <h2>
      Redirecting...
    </h2>
  )
}
