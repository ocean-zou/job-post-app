'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  Container, FormTitle, Form, StyledButton as Button, Span,
} from './page.style'
import Logo from '@/components/Logo/Logo'
import Card from '@/components/Card/Card'
import FormInputRow from '@/components/FormInputRow/FormInputRow'
import { useAppContext } from '@/context/appContext'

export default function RegisterPage() {
  const [isLogin, setIsLogin] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '', email: '', password: '',
  })

  const router = useRouter()
  const { user, setupUser } = useAppContext()
  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user, router])

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const { name, email, password } = formValues
    if (!email || !password) {
      alert('Please fill out all fields')
    }
    const currentUser = { name, email, password }
    if (isLogin) {
      setupUser({
        currentUser,
        endpoint: 'login',
      })
    } else {
      setupUser({
        currentUser,
        endpoint: 'register',
      })
    }
  }
  const handleOnChange = (event) => {
    setFormValues({
      ...formValues, [event.target.name]: event.target.value,
    })
  }
  return (
    <Container>
      <Card>
        <Logo />
        <FormTitle>{!isLogin ? 'Register' : 'Login'}</FormTitle>
        <Form onSubmit={handleOnSubmit}>
          {!isLogin && <FormInputRow onChange={handleOnChange} text="text" name="name" />}
          <FormInputRow onChange={handleOnChange} text="text" name="email" />
          <FormInputRow onChange={handleOnChange} type="password" name="password" />
          <Button type="submit">Submit</Button>
          <Button variant="secondary">Demo App</Button>
          <Span>Already a member?
            <Button variant="text" onClick={() => setIsLogin((pre) => !pre)}>
              {isLogin ? 'Register' : 'Login'}
            </Button>
          </Span>
        </Form>
      </Card>
    </Container>
  )
}
