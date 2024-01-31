import Produto from "./Produro";


export default interface Categoria{
    id: number;
    nome: string;
    produto?: Produto | null;

}
