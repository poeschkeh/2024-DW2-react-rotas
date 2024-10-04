import { Pagina } from "../../components/Pagina"
import { useState } from "react"
import { useRef } from "react"

export function UseRef() {
    const [estado, setEstado] = useState(0)
    const referencia = useRef(0)

    function incrementaEstado() {
        setEstado(estado + 1)
    }

    function incrementaReferencia() {
        // referencia.current = referencia.current += 1
        referencia.current += 1
    }

    return (
        <Pagina
            titulo="UseRef"
            subtitulo="Hooks Basicos"
        >

            <div className="flex flex-col">
                <div>{`REFERÊNCIA: ${referencia.current} | ESTADO: ${estado.current}`}</div>
                <div>
                    <button className="bg-purple-400 px-3 py-2 rounded-md" onClick={incrementaReferencia}>Ref +</button>
                    <button className="bg-blue-400 px-3 py-2 rounded-md"onClick={incrementaEstado}>Estado +</button>
                </div>
            </div>
        </Pagina>
    )
}