import { useState } from "react";
import SlideBar from "./Components/SideBar";
import RegistroEndereco from "./Components/Registro_Endereco";
import BuscarGato from "./Components/Buscar_gato";
import TextPlaceHolder from "./Components/TextPlaceHolder";
import CrudJogos from "./Components/CrudJogos";
function App() {
  const [section, setSection] = useState("Home");

  return (
    <div className="flex min-h-screen bg-pink-50 text-gray-800">
      <SlideBar setSection={setSection} current={section} />

      <div className="flex-1 p-10">
        {section === "API-ViaCep" && (
          <RegistroEndereco / >
        )}
        {section === "API-CatApi" && (
          <BuscarGato / >      )}
        {section === "API-PlaceHolder" && (
          <TextPlaceHolder / >
        )}
        {section === "API-CRUD" && (
          <CrudJogos / >  
        )}
      </div>
    </div>
  );
}

export default App;