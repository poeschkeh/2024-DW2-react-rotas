import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/Estado/SemEstado";
import { ComEstado } from "./pages/Estado/ComEstado";
import { CampoTexto } from "./pages/Estado/CampoTexto";
import { Contador } from "./pages/Estado/Contador";
import { ComunicacaoDireta } from "./pages/Comunicacao/ComunicacaoDireta";
import { ComunicacaoIndireta } from "./pages/Comunicacao/ComunicacaoIndireta";
import { UseEffect } from "./pages/hooks-basicos/UseEffect";
import { UseRef } from "./pages/hooks-basicos/UseRef";

// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="Contato" element={<Contato />} />
      <Route path="Sobre" element={<Sobre />} />
      <Route path="SemEstado" element={<SemEstado />} />
      <Route path="ComEstado" element={<ComEstado />} />
      <Route path="CampoTexto" element={<CampoTexto />} />
      <Route path="Contador" element={<Contador />} />
      <Route path="ComunicacaoDireta" element={<ComunicacaoDireta />} />
      <Route path="ComunicacaoIndreta" element={<ComunicacaoIndireta />} />
      <Route path="UseEffect" element={<UseEffect />} />
      <Route path="UseRef" element={<UseRef />} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} /> {/*Fornece um provedor de rotas para aplicação*/}
  </StrictMode>,
)
