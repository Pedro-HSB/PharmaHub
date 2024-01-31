import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  post: Categoria
}

function CardCategorias({ post }: CardCategoriaProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
          <p>Nome:{post.nome}</p>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarCategoria/${post.id}`} className='w-full text-white bg-red-400 hover:bg-red-700 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${post.id}`} className='text-white bg-pink-400 hover:bg-pink-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}


export default CardCategorias