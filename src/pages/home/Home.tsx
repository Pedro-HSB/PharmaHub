import ListaProdutos from "../../components/produto/listaProduto/ListarProdutos"

function Home() {

    return (
        <>
            <div id="container" className="flex justify-center bg-red-200">
                <div id="subcontainer" className=" container  grid  grid-cols-2  text-white
                    ">
                    <div id="texto" className="flex flex-col gap-4 items-center justify-center  py-4 ">
                        <h3 className=" text-5xl font-bold ">Venha Conhecer Nossos Produtos!</h3>

                        <div className="flex justify-around gap-4">

                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center">
                        <img
                            src="src\assets\img\home.svg"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <ListaProdutos />
        </>
    )
}

export default Home