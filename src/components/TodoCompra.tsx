import { useState } from 'react'
import {useForm} from '../hook/useForm'
import {ListaCompra} from '../components/ListaCompra'

type Compra = {nombre: string, cantidad:number, comprado:boolean}

export const TodoCompra = () => {

    const Inicio = {
        product : '',
        cantidad: 0
    }

    const {product, cantidad, onInputOnchage, onLimpiarInput} = useForm(Inicio)
    const [listaProducto, setListaProducto] = useState<Compra[]>([])

    const handleAddProduct = () =>{
        if(product.trim() === '') return
        setListaProducto((productoAnterior) => [...productoAnterior, {nombre: product, cantidad: cantidad, comprado:false}])
        onLimpiarInput()
    }

    const handleEliminarProducto = (index:number) =>{
        setListaProducto(listaProducto.filter((_, i)=> i !== index))
    }

    const handleComprado = (index: number) =>{
        setListaProducto(listaProducto.map((producto, i) => i == index ? {...producto, comprado: !producto.comprado}: producto))
    }

  return (
    <>
    <div className="Compra_user">
        <input type="text"
        placeholder="Producto"
        name="product"
        value={product}
        onChange={onInputOnchage} />
        <input type="text"
        placeholder='cantidad'
        name='cantidad'
        value={cantidad}
        onChange={onInputOnchage} />
        <button className="agregar" onClick={handleAddProduct}>Agregar Producto</button>
        <ListaCompra listaProducto={listaProducto} borrarProducto ={handleEliminarProducto} comprado={handleComprado}></ListaCompra>
    </div>
    </>
  )
}