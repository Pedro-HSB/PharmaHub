import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-red-400 text-white flex justify-center py-4 p-1'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase hover:underline'>PharmaHub</Link>
                    <div className='flex gap-4'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <Link to='/cadastrarProduto' className='hover:underline'>Cadastrar Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar