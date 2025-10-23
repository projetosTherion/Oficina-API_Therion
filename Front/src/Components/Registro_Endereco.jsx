import { useState } from "react";
import {
  FaMapMarkedAlt,
  FaRegSave,
  FaSearchLocation,
} from "react-icons/fa";
import {
  MdHome,
  MdLocationCity,
  MdNumbers,
  MdLightbulb,
} from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { RiMapPin2Line } from "react-icons/ri";

export default function RegistroEndereco() {
  const [form, setForm] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCepBlur = async () => {
    const cep = form.cep.replace(/\D/g, "");
    if (cep.length === 8) {
      console.log("CEP válido, pronto para buscar na API ViaCEP:", cep);
      //TODO Fazer a requisição para ViaCEP e preencher os campos
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Endereço cadastrado:", form);
  };

  return (
    <div className="max-w-xl mx-auto bg-pink-100 p-8 rounded-2xl shadow-md mt-10 border border-pink-300">
      <h2 className="text-2xl font-bold text-center text-pink-800 mb-6 flex items-center justify-center gap-2">
        <FaMapMarkedAlt className="text-pink-600" /> Cadastro de Endereço
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* CEP */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
            <FaSearchLocation /> CEP
          </label>
          <input
            type="text"
            name="cep"
            value={form.cep}
            onChange={handleChange}
            onBlur={handleCepBlur}
            placeholder="Ex: 01001-000"
            className="w-full p-2 border rounded-lg text-gray-700 border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Rua */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
            <MdHome /> Rua
          </label>
          <input
            type="text"
            name="rua"
            value={form.rua}
            onChange={handleChange}
            placeholder="Digite o nome da rua"
            className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Número e Complemento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
              <MdNumbers /> Número
            </label>
            <input
              type="text"
              name="numero"
              value={form.numero}
              onChange={handleChange}
              placeholder="Ex: 123"
              className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
              <BiBuildings /> Complemento
            </label>
            <input
              type="text"
              name="complemento"
              value={form.complemento}
              onChange={handleChange}
              placeholder="Apto, bloco, etc."
              className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {/* Bairro */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
            <RiMapPin2Line /> Bairro
          </label>
          <input
            type="text"
            name="bairro"
            value={form.bairro}
            onChange={handleChange}
            placeholder="Digite o bairro"
            className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Cidade e Estado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
              <MdLocationCity /> Cidade
            </label>
            <input
              type="text"
              name="cidade"
              value={form.cidade}
              onChange={handleChange}
              placeholder="Cidade"
              className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-pink-700 mb-1">
              UF
            </label>
            <input
              type="text"
              name="estado"
              value={form.estado}
              onChange={handleChange}
              placeholder="SP, RJ, MG..."
              className="w-full p-2 border rounded-lg border-pink-300 focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition flex items-center justify-center gap-2"
        >
          <FaRegSave /> Salvar Endereço
        </button>
      </form>

      {/* Caixa de explicação didática */}
      <div className="mt-10 bg-pink-200 border border-pink-300 rounded-2xl p-5 text-sm text-pink-900">
        <p className="font-semibold text-lg mb-1 flex items-center gap-2">
          <MdLightbulb className="text-yellow-500" /> Como funciona:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            O usuário digita o <b>CEP</b> e ao sair do campo, a API do ViaCEP
            pode ser usada para preencher automaticamente os campos.
          </li>
          <li>
            O formulário aceita <b>dados manuais</b> como número e complemento.
          </li>
          <li>
            Ao clicar em <b>Salvar Endereço</b>, os dados são exibidos no
            console (simulação de envio).
          </li>
          <li>
            O componente está pronto para ser integrado com qualquer backend ou
            banco de dados.
          </li>
          <li>
            A API{" "}
            <a
              href="https://viacep.com.br/"
              target="_blank"
              className="underline text-pink-700"
            >
              ViaCEP
            </a>{" "}
            pode ser usada para preencher os campos automaticamente a partir do
            CEP.
          </li>
        </ul>
      </div>
    </div>
  );
}
