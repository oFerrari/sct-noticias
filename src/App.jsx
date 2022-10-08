import './App.css'
import { Topo } from './Topo'
import { Noticia} from './Noticia'



function App() {
  

  return (
    <div className="App">
      <h1>SCT Noticias</h1>
      <Topo/>
      <main>
        <Noticia titulo="Noticia 01"/>
        <Noticia titulo="Noticia 02"/>
        <Noticia titulo="Noticia 03"/>
        <Noticia titulo="Noticia 04"/>
        <Noticia titulo="Noticia 05"/>

      </main>
    </div>
  )
}

export default App
