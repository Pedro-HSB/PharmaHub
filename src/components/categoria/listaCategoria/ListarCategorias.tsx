import React, { useContext, useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import CardCategorias from '../cardCategoria/CardCategoria';
import { ToastAlert } from '../../../utils/ToastAlert';
 
function ListaCategorias() {
  const [Categorias, setCategorias] = useState<Categoria[]>([]);



  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias)
    } catch (error: any) {
      ToastAlert('Tente novamente Mais Tarde', "info")

    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [Categorias.length]);
  return (
    <>
      {Categorias.length === 0 && (
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
        {Categorias.map((Categoria) => (
          <>
            <CardCategorias key={Categoria.id} post={Categoria} />
          </>
        ))}
      </div>
    </>
  );
}

export default ListaCategorias;