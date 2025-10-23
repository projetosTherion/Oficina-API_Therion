import { useState } from "react";
import { FaCat, FaSearch } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

export default function BuscarGato() {
  const [gatoUrl, setGatoUrl] = useState(null);
  const [carregando, setCarregando] = useState(false);

  // Função para buscar imagem da API
  const buscarGato = async () => {
    //TODO Buscar imagem da API TheCatAPI
    setCarregando(true);
    setCarregando(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-pink-100 p-8 rounded-2xl shadow-md mt-10 border border-pink-300">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center text-pink-800 mb-6 flex items-center justify-center gap-2">
        <FaCat className="text-pink-600 text-3xl" /> Buscar Gato (API REST)
      </h2>

      {/* Botão de busca */}
      <div className="text-center mb-6">
        <button
          onClick={buscarGato}
          disabled={carregando}
          className={`flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-xl text-white font-semibold transition ${
            carregando
              ? "bg-pink-400 cursor-not-allowed"
              : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          <FaSearch />
          {carregando ? "Buscando..." : "Buscar Gato"}
        </button>
      </div>

      {/* Imagem do gato */}
      <div className="flex justify-center">
        {gatoUrl ? (
          <img
            src={gatoUrl}
            alt="Gato fofo"
            className="rounded-2xl shadow-md w-full max-w-md border border-pink-300"
          />
        ) : (
          <div className="w-full h-64 bg-pink-200 rounded-2xl flex items-center justify-center border border-pink-300 text-pink-700 font-medium">
            <FaCat className="text-4xl mr-2" />
            Nenhum gato carregado ainda
          </div>
        )}
      </div>

      {/* Bloco explicativo */}
      <div className="mt-10 bg-pink-200 border border-pink-300 rounded-2xl p-5 text-sm text-pink-900">
        <p className="font-semibold text-lg mb-1 flex items-center gap-2">
          <MdLightbulb className="text-yellow-500" /> Como funciona:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Usa a API gratuita <code>TheCatAPI</code> para buscar imagens aleatórias.</li>
          <li>O botão chama a função <code>fetch()</code> → obtém a imagem do gato 🐱.</li>
          <li>Usamos <code>useState</code> para armazenar e atualizar o link da imagem.</li>
          <li>O botão muda para “Buscando...” enquanto a requisição é feita.</li>
          <li>Perfeito para demonstrar requisições GET em APIs REST.</li>
        </ul>
      </div>
    </div>
  );
}
