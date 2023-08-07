'use client'

// import RedirectTemplate from '@/components/Redirecting/Redirecting'
import RedirectTemplate from '../../components/Redirecting/Redirecting'

const { useAppContext } = require('@/context/appContext')

export default function Dashboard() {
  const { user } = useAppContext()

  if (user === undefined) {
    return (<RedirectTemplate />)
  }
  return (
    <h1>Dashboard</h1>
  )
}
