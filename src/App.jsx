import axios from "axios"

function App() {
  async function obterDadosDaAPI() {
    try {
      const resposta = await axios.get("https://jsonplaceholder.typicode.com/posts");
     resposta.data.map((post) => {
        console.log(post.title)
      });
    } catch (erro) {
      console.error('Erro ao obter dados da API:', erro);
    }
  }
  obterDadosDaAPI()
  return (
    <div>
     <h1>Olá Mundo!</h1>
    </div>
  )
}

export default App
