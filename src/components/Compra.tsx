type Compras = {nombre: string, cantidad:number, comprado:boolean}
type Props = {
    listaProducto: Compras,
    borrarProducto: () => void,
    comprado: () => void
}

export const Compra = ({ listaProducto, borrarProducto, comprado }: Props) => {
  return (
    <div className="producto">
      <span>
        🛍️ {listaProducto.nombre} — <strong>{listaProducto.cantidad}</strong>
      </span>
      <div>
        <button onClick={borrarProducto}>Borrar</button>
        <button onClick={comprado}>
          {listaProducto.comprado ? "Disponible" : "No Disponible"}
        </button>
      </div>
    </div>
  );
};
