import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className='w-full bg-emerald-400 text-white flex justify-center py-4 p-1'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold uppercase  hover:bg-emerald-500 rounded'>PharmaHub</Link>
                    <div className='flex gap-4'>
                        <Link to='/produtos' className=' hover:bg-emerald-500 rounded'>Produtos</Link>
                        <Link to='/categorias' className=' hover:bg-emerald-500 rounded'>Categoria</Link>
                        <Link to='/cadastrarCategoria' className=' hover:bg-emerald-500 rounded'>Cadastrar Categoria</Link>
                        <Link to='/cadastrarProduto' className=' hover:bg-emerald-500 rounded'>Cadastrar Produtos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar