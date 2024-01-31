import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { ToastAlert } from "../../../utils/ToastAlert";


function FormProduto() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();

    const [Categorias, setCategorias] = useState<Categoria[]>([])

    const [Categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: "",
    })

    const [Produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        preco: 0,
        foto: "",
        categoria: null,
    })

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {

            ToastAlert('Tente novamente Mais Tarde', "info")

        }
    }


    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {

            ToastAlert('Tente novamente Mais Tarde', "info")

        }
    }


    async function buscarCategorias() {
        try {
            await buscar(`/categorias`, setCategorias)
        } catch (error: any) {

            ToastAlert('Tente novamente Mais Tarde', "info")

        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
            console.log(Categoria);

        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...Produto,
            categoria: Categoria,
        })
    }, [Categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...Produto,
            [e.target.name]: e.target.value,
            categoria: Categoria,
        })
    }

    function retornar() {
        navigate("/produtos")
    }

    async function gerarNovaProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, Produto, setProduto)
                ToastAlert('Produto foi atualizado com sucesso!', "sucesso")
            } catch (error: any) {

                {
                    ToastAlert('Erro ao atualizar o Produto.', "erro")
                }

            }
        } else {
            try {
                await cadastrar(`/produtos`, Produto, setProduto)
                ToastAlert('Produto foi cadastrado com sucesso!', "sucesso")
            } catch (error: any) {

                {
                    ToastAlert('Erro ao cadastrar o Produto.', "erro")
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = Categoria.nome === ""

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaProduto}>


                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">nome da Produto</label>
                    <input
                        type="text"
                        placeholder="O nome Do Seu Produto"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={Produto.nome}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">preco da Produto</label>
                    <input
                        type="number"
                        placeholder="O preco Do Seu Produto"
                        name='preco'
                        className="border-2 border-slate-700 rounded p-2"
                        value={Produto.preco}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">preco da Produto</label>
                    <input
                        type="text"
                        placeholder="O link da foto Do Seu Produto"
                        name='foto'
                        className="border-2 border-slate-700 rounded p-2"
                        value={Produto.foto}
                        required
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria da Produto</p>
                    <select name="Categoria" id="Categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
                        <option value="" selected disabled>Selecione um Categoria</option>
                        {Categorias.map((Categoria) => (
                            <>
                                <option value={Categoria.id} >{Categoria.nome}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    disabled={carregandoCategoria}
                    className="rounded disabled:bg-slate-200 text-slate-100 bg-red-400 
                               hover:bg-red-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormProduto;