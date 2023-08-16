import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import api from '../../../services/api'
import {
  Container,
  Input,
  Label,
  ButtonStyle,
  LabelUpload,
  ErrorMessage,
  Title,
  InputOffer
} from './styles'

function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const {
    push,
    location: {
      state: { product }
    }
  } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    price: Yup.number().required('O preço é obrigatório'),
    category_id: Yup.object().required('A categoria é obrigatória'),
    offer: Yup.bool()
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productFormData = new FormData()

    productFormData.append('name', data.name)
    productFormData.append('price', data.price)
    productFormData.append('category_id', data.category_id.id)
    productFormData.append('file', data.file[0])
    productFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productFormData), {
      pending: 'Editando produto',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar novo produto'
    })
    setTimeout(() => {
      push('/listar-produtos')
    }, 1000)
  }

  useEffect(() => {
    async function loadCategory() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategory()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Title>Editar produto!</Title>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} defaultValue={product.name} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>

        <Label>Preço</Label>
        <Input
          type="number"
          {...register('price')}
          defaultValue={product.price}
        />
        <ErrorMessage>{errors.price?.message}</ErrorMessage>

        <LabelUpload>
          {fileName || 'Upload da imagem'}
          <input
            type="file"
            accept="image/png, image/svg, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>
        <ErrorMessage>{errors.file?.message}</ErrorMessage>

        <Controller
          name="category_id"
          control={control}
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Escolha a categoria"
                defaultValue={product.category}
              />
            )
          }}
        ></Controller>
        <ErrorMessage>{errors.category_id?.message}</ErrorMessage>
        <InputOffer>
          <input
            type="checkbox"
            defaultChecked={product.offer}
            {...register('offer')}
          />
          <p>O produto está em oferta?</p>
        </InputOffer>

        <ButtonStyle>Editar produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default EditProduct
