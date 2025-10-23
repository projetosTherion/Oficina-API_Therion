import { useState } from "react";
import { FaDatabase, FaSpinner, FaSyncAlt } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

export default function TextPlaceHolder() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarDados = async () => {
    setLoading(true);
    setPosts([]);
    //TODO Buscar dados da API JSONPlaceholder
  };

  return (
    <div className="max-w-4xl mx-auto bg-pink-100 p-8 rounded-2xl shadow-md mt-10 border border-pink-300">
      <h2 className="text-2xl font-bold text-center text-pink-800 mb-6 flex items-center justify-center gap-2">
        <FaDatabase className="text-pink-600" /> Placeholders com API
      </h2>

      {/* Botão para buscar os dados */}
      <div className="flex justify-center mb-8">
        <button
          onClick={buscarDados}
          disabled={loading}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" /> Carregando...
            </>
          ) : (
            <>
              <FaSyncAlt /> Buscar Dados
            </>
          )}
        </button>
      </div>

      {/* Grid com placeholders ou dados reais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-pink-200 animate-pulse rounded-xl p-4 shadow-inner space-y-3"
              >
                <div className="h-32 bg-pink-300 rounded-lg"></div>
                <div className="h-4 bg-pink-300 rounded w-3/4"></div>
                <div className="h-4 bg-pink-300 rounded w-1/2"></div>
              </div>
            ))
          : posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition border border-pink-200"
              >
                <div className="h-32 bg-pink-50 rounded-lg flex items-center justify-center text-pink-400 font-semibold">
                  📦 Imagem simulada
                </div>
                <h3 className="text-lg font-bold text-pink-900 mt-3">
                  {post.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2">{post.body}</p>
              </div>
            ))}
      </div>

      {/* Explicação didática */}
      <div className="mt-10 bg-pink-200 border border-pink-300 rounded-2xl p-5 text-sm text-pink-900">
        <p className="font-semibold text-lg mb-1 flex items-center gap-2">
          <MdLightbulb className="text-yellow-500" /> Como funciona:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Ao clicar no botão, o React faz a requisição com <code>fetch()</code>.
          </li>
          <li>
            Enquanto espera a resposta, mostra <b>placeholders animados</b> com <code>animate-pulse</code>.
          </li>
          <li>
            Quando a resposta chega, os placeholders são substituídos pelos dados reais.
          </li>
          <li>
            Esse conceito é amplamente usado em <b>feeds, dashboards e apps modernos</b>.
          </li>
          <li>
            A API usada é a{" "}
            <a
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              className="underline text-pink-700"
            >
              JSONPlaceholder
            </a>{" "}
            como fonte de teste.
          </li>
        </ul>
      </div>
    </div>
  );
}
