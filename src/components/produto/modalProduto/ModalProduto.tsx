import Popup from 'reactjs-popup';
import FormProduto from '../formProduto/FormProduto';
import "reactjs-popup/dist/index.css"

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={<button className="border rounded px-4 hover:bg-white hover:text-indigo-800">Nova Produto</button>}modal>
                    <div>
                        <FormProduto/>
                    </div>

            </Popup>
        </>
    )
}

export default ModalProduto