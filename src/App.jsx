import './App.css'
import { Topo } from './Topo'
import { Noticia} from './Noticia'



function App() {
  

  return (
    <div className="App">
      <h1>SCT Noticias</h1>
      <Topo/>
      <main>
        <Noticia/>
      </main>
    </div>
  )
}

export default App
