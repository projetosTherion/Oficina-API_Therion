import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaGamepad, FaSave, FaSearch } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";
import Slider from "react-slick";

export default function CrudJogos() {
  const [jogos, setJogos] = useState([]);
  const [novoJogo, setNovoJogo] = useState({ titulo: "", descricao: "" });
  const [editando, setEditando] = useState(null);
  const [busca, setBusca] = useState("");
  const [mensagem, setMensagem] = useState("");

  // READ — busca os dados simulados
  useEffect(() => {
    buscarJogos();
  }, []);

  const buscarJogos = async () => {
    console.log("Buscando jogos...");
    //TODO Buscar dados da API
  };

  // CREATE
  const adicionarJogo = async () => {
    console.log("Adicionar novo jogo:", novoJogo);
    //TODO Adicionar novo jogo via API
    if (!novoJogo.titulo.trim()) return alert("Preencha o título!");
  };

  // UPDATE
  const atualizarJogo = async () => {
    console.log("Atualizar jogo:", editando);
    //TODO Atualizar jogo via API
    if (!editando) return;
  };

  // DELETE
  const excluirJogo = async (id) => {
    console.log("Excluir jogo com id:", id);
    //TODO Excluir jogo via API
  };

  // Filtragem de jogos pela busca
  const jogosFiltrados = jogos.filter((jogo) =>
    (jogo.titulo || "").toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto bg-pink-100 p-8 rounded-2xl shadow-md mt-10 border border-pink-300 relative">
      {/* Mensagem de sucesso */}
      {mensagem && (
        <div className="absolute top-4 right-4 bg-green-400 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {mensagem}
        </div>
      )}

      <h2 className="text-2xl font-bold text-center text-pink-800 mb-6 flex items-center justify-center gap-2">
        <FaGamepad className="text-pink-600" /> CRUD de Jogos (API REST)
      </h2>

      {/* Barra de busca */}
      <div className="flex items-center gap-2 mb-6 bg-white p-3 rounded-xl border border-pink-200 shadow-sm">
        <FaSearch className="text-pink-500 text-lg" />
        <input
          type="text"
          placeholder="Buscar jogo por título..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="flex-1 p-2 rounded-md border border-pink-300 focus:ring-2 focus:ring-pink-400 outline-none"
        />
      </div>

      {/* Formulário de cadastro/edição */}
      <div className="bg-white p-5 rounded-xl shadow mb-8 border border-pink-200">
        <h3 className="text-lg font-semibold text-pink-700 mb-4 flex items-center gap-2">
          {editando ? (
            <>
              <FaEdit className="text-pink-600" /> Editar Jogo
            </>
          ) : (
            <>
              <FaPlus className="text-pink-600" /> Adicionar Novo Jogo
            </>
          )}
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Título do jogo"
            value={editando ? editando.titulo : novoJogo.titulo}
            onChange={(e) =>
              editando
                ? setEditando({ ...editando, titulo: e.target.value })
                : setNovoJogo({ ...novoJogo, titulo: e.target.value })
            }
            className="flex-1 p-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="text"
            placeholder="Descrição"
            value={editando ? editando.descricao : novoJogo.descricao}
            onChange={(e) =>
              editando
                ? setEditando({ ...editando, descricao: e.target.value })
                : setNovoJogo({ ...novoJogo, descricao: e.target.value })
            }
            className="flex-1 p-2 rounded-lg border border-pink-300 focus:ring-2 focus:ring-pink-400"
          />

          {editando ? (
            <button
              onClick={atualizarJogo}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition flex items-center gap-2"
            >
              <FaSave /> Salvar
            </button>
          ) : (
            <button
              onClick={adicionarJogo}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition flex items-center gap-2"
            >
              <FaPlus /> Adicionar
            </button>
          )}
        </div>
      </div>

      {/* Carrossel de jogos */}
      <div className="mt-8">
        {jogosFiltrados.length > 0 ? (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={3}
            autoplay={true}
            autoplaySpeed={4000}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ]}
          >
            {jogosFiltrados.map((jogo) => (
              <div key={jogo.id} className="px-2">
                <div className="bg-white rounded-xl p-4 border border-pink-200 shadow hover:shadow-lg transition h-full">
                  <div className="h-32 bg-pink-50 rounded-lg flex items-center justify-center text-pink-400 font-semibold mb-3 text-5xl">
                    <FaGamepad />
                  </div>
                  <h3 className="text-lg font-bold text-pink-900">
                    {jogo.title || jogo.titulo}
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    {jogo.body || jogo.descricao || "Sem descrição"}
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => setEditando(jogo)}
                      className="bg-pink-300 hover:bg-pink-400 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                    >
                      <FaEdit /> Editar
                    </button>
                    <button
                      onClick={() => excluirJogo(jogo.id)}
                      className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                    >
                      <FaTrash /> Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500 italic mt-6">
            Nenhum jogo encontrado.
          </p>
        )}
      </div>

      {/* Explicação didática */}
      <div className="mt-10 bg-pink-200 border border-pink-300 rounded-2xl p-5 text-sm text-pink-900">
        <p className="font-semibold text-lg mb-1 flex items-center gap-2">
          <MdLightbulb className="text-yellow-500" /> Como funciona:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li><b>CREATE:</b> Adiciona um novo jogo com <code>POST</code>.</li>
          <li><b>READ:</b> Mostra todos os jogos carregados com <code>GET</code>.</li>
          <li><b>UPDATE:</b> Permite editar e salvar usando <code>PUT</code>.</li>
          <li><b>DELETE:</b> Remove o jogo com <code>DELETE</code>.</li>
        </ul>
      </div>
    </div>
  );
}
