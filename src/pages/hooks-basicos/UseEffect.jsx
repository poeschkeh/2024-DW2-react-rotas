import { useEffect, useState } from "react"
import { Pagina } from "../../components/Pagina"

export function UseEffect() {
    const [url, setUrl] = useState("")

    function trocarImagem() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((resposta) => resposta.json())
            .then((objeto) => setUrl(objeto.message));
    }

    useEffect(trocarImagem, []) //Excecuta uma unica vez
    // trocarImagem()

    return (
        <Pagina
            titulo="UseEffect"
            subtitulo="Hooks Basicos"
        >
            
            <div className="flex flex-col">
                <button className="bg-purple-400 px-3 py-2 rounded-md mr-2" onClick={trocarImagem}>Trocar</button>
                <img src={url} alt="" />
            </div>
        </Pagina>
    )
}