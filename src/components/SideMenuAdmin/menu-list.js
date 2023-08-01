import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined'
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined'
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: '/pedidos',
    icon: ShoppingBagTwoToneIcon
  },
  {
    id: 2,
    label: 'Lista de Produtos',
    link: '/listar-produtos',
    icon: ContentPasteOutlinedIcon
  },
  {
    id: 3,
    label: 'Adicionar/Editar Produto',
    link: '/novo-produto',
    icon: AddToQueueOutlinedIcon
  }
]

export default listLinks
