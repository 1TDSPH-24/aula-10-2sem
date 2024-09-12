import { Outlet } from "react-router-dom";
import Rodape from "./components/Rodape/Rodape";
import Cabecalho from "./components/Header/Header";

export default function App(){
  return (
    <div>
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </div>
  );
}