import { Pagina } from "../../components/Pagina";

export function SemEstado() {
  let numero = 0

  function incrementar() {
    numero += 1
    console.log(numero)
  }

  return (
    <Pagina titulo="Sem Estado " subtitulo="Conceito de Estado no React">
      <div className="flex fleex-col gap-4">
        <span className="text-2xl">{numero}</span>
        <button className="bg-purple-400 rounded-md p-2" onClick={incrementar}>Incrementar</button>
      </div>
      {/* <div>
        <input
          className="bg-zinc-400"
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          className="bg-zinc-600 p-4 rounded-md"
          onClick={() => setTexto("")}
        >
          ok
        </button>
        <span>{texto}</span>
      </div> */}
    </Pagina>
  );
}
