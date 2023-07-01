'use client'

import { useState } from 'react'
import {
  Container, FormTitle, Form, StyledButton as Button, Span,
} from './page.style'
import Logo from '@/components/Logo/Logo'
import Card from '@/components/Card/Card'
import FormInputRow from '@/components/FormInputRow/FormInputRow'

export default function RegisterPage() {
  const [formValues, setFormValues] = useState({
    name: '', email: '', password: '',
  })
  const handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('form submit')
  }
  const handleOnChange = (event) => {
    setFormValues({
      ...formValues, [event.target.name]: event.target.value,
    })
    console.log(formValues)
  }
  return (
    <Container>
      <Card>
        <Logo />
        <FormTitle>Register</FormTitle>
        <Form onSubmit={handleOnSubmit}>
          <FormInputRow onChange={handleOnChange} text="text" name="name" />
          <FormInputRow onChange={handleOnChange} text="text" name="email" />
          <FormInputRow onChange={handleOnChange} type="password" name="password" />
          <Button type="submit">Submit</Button>
          <Button variant="secondary">Demo App</Button>
          <Span>Already a member?<Button variant="text">Lgoin</Button></Span>
        </Form>
      </Card>
    </Container>
  )
}
