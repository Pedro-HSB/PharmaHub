import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/Service';
import CardProdutos from '../cardProduto/CardProduto';
import { ToastAlert } from '../../../utils/ToastAlert';
 
function ListaProdutos() {
  const [Produtos, setProdutos] = useState<Produto[]>([]);


  async function buscarProdutos() {
    try {
      await buscar('/produtos', setProdutos)
    } catch (error: any) {
        ToastAlert('O token expirou, favor logar novamente', "info")

    }
  }


  useEffect(() => {
    buscarProdutos();
  }, [Produtos.length]);
  return (
    <>
      {Produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="DNA-loading"
          wrapperStyle={{}}
          wrapperClass="DNA-wrapper mx-auto"
        />
      )}
      <div className="container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Produtos.map((Produto) => (
          <>
            <CardProdutos key={Produto.id} post={Produto} />
          </>
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;