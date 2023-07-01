import { Label, Input, Container } from './FormInputRow.style'

export default function FormInputRow({ name, onChange, type }) {
  return (
    <Container>
      <Label htmlFor="name">{name}</Label>
      <Input type={type} name={name} onChange={onChange} />
    </Container>
  )
}
