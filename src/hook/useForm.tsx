import React, { useState } from 'react'

type Props = {
    product: string,
    cantidad: number
}

export const useForm = (Inicio: Props) => {
    const [stado, setStado] = useState(Inicio)
    
    const onInputOnchage = (evento: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = evento.target
        setStado({
            ...stado,
            [name]: value
        })
    }

    const onLimpiarInput= ()=>{
        setStado(Inicio)
    }

  return {
    stado,
    ...stado,
    onInputOnchage,
    onLimpiarInput
  }
}