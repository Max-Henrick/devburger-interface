import React from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import { Container, Input, Label, ButtonStyle } from './styles'

function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <Label>Upload da imagem</Label>
        <Input type="file" accept="image/png, image/svg, image/jpeg" />

        <ReactSelect />

        <ButtonStyle>Adicionar produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default NewProduct
