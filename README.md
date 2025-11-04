# Therion Oficina API

## 📚 Descrição do Projeto

Este projeto é uma ferramenta educacional criada para ensinar os conceitos fundamentais de APIs REST, tanto no consumo de APIs públicas quanto na criação de suas próprias APIs simples. O projeto é dividido em duas partes principais: um backend (servidor API) e um frontend (interface do usuário).

## 🎯 Objetivos de Aprendizado

- Compreender o funcionamento básico de APIs RESTful
- Aprender a consumir APIs públicas em aplicações web
- Desenvolver APIs simples utilizando Node.js
- Implementar operações CRUD em um ambiente full-stack
- Praticar o desenvolvimento frontend com React e TailwindCSS

## 🏗️ Estrutura do Projeto

### Backend (`back`)
- Servidor Node.js que fornece uma API REST simples
- Armazenamento de dados simulado usando JSON
- Endpoints para gerenciamento de jogos e outros recursos

### Frontend (`Front`)
- Interface de usuário construída com React e Vite
- Estilização com TailwindCSS
- Componentes para:
  - Busca de informações de gatos usando API pública (`Buscar_gato.jsx`)
  - Gerenciamento de jogos (CRUD) (`CrudJogos.jsx`)
  - Registro de endereços (`Registro_Endereco.jsx`)
  - Navegação (`SideBar.jsx`)

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Configuração do Backend
1. Navegue até a pasta `back`:
```bash
cd back
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (copie o modelo `.env` se necessário)

4. Inicie o servidor:
```bash
npm start
```

### Configuração do Frontend
1. Navegue até a pasta `Front`:
```bash
cd Front
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 📘 Guia de Uso

### Estrutura FETCH
#### API sem Body e Header : 
```js
const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
```
#### API com Body e Header : 
```js
const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...novoJogo, id: Date.now().toString() }),
      });
      const data = await response.json();
```


### Consumindo APIs Públicas
O componente `Buscar_gato.jsx` demonstra como fazer requisições para uma API pública de gatos. Você pode:
- Ver como as requisições são estruturadas
- Observar o tratamento de respostas
- Aprender sobre gestão de estados com os dados recebidos

### Criando sua própria API
O backend demonstra:
- Como estruturar um servidor Node.js básico
- Como definir rotas e controladores
- Como implementar operações CRUD
- Como trabalhar com dados simulados antes de usar um banco de dados real

### Operações CRUD
O componente `CrudJogos.jsx` mostra como:
- Criar novos registros de jogos
- Ler informações existentes
- Atualizar dados
- Excluir registros

## 🧩 APIs Utilizadas

- **API de Gatos**: Demonstração de consumo de API pública para obter imagens e fatos sobre gatos (https://api.thecatapi.com/v1/images/search)
- **API de Endereços**: Sistema para cadastro e validação de endereços (https://viacep.com.br/ws/${cep}/json/)
- **API de PlaceHolder**: Utilização de dados simulados para front-end (https://jsonplaceholder.typicode.com/posts?_limit=3)
- **API de Jogos**: API própria implementada no backend para gerenciamento de jogos

## 👨‍💻 Contribuindo

Sinta-se à vontade para contribuir com este projeto educacional! Você pode:
1. Fazer um fork do repositório
2. Criar uma nova branch (`git checkout -b feature/sua-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é para fins educacionais.

---

Desenvolvido por Therion EJ - Um projeto para ensinar conceitos de APIs de maneira prática e acessível.