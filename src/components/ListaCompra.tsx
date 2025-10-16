import {Compra} from '../components/Compra'
type Compra = {nombre: string, cantidad:number, comprado:boolean}

type Props = {
    listaProducto: Compra[],
    borrarProducto: (index:number) => void,
    comprado: (index:number) => void
}

export const ListaCompra = ({listaProducto, borrarProducto, comprado}: Props) => {
  return (
    <>
    <div className="listado_comprado">
        {
            listaProducto.map((product, index) =>(
                <Compra listaProducto={product}
                borrarProducto={() => borrarProducto(index)}
                comprado={() => comprado(index)}></Compra>
            )
            )
        }
    </div>
    
    </>
  )
}