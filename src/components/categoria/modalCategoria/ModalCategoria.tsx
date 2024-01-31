import Popup from 'reactjs-popup';
import FormCategoria from '../formCategoria/FormCategoria';
import "reactjs-popup/dist/index.css"

function ModalCategoria() {
    return (
        <>
            <Popup
                trigger={<button className="border rounded px-4 hover:bg-white hover:text-red-800">Nova Categoria</button>}modal>
                    <div>
                        <FormCategoria/>
                    </div>

            </Popup>
        </>
    )
}

export default ModalCategoria