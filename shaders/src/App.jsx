import { Shader } from '../components/Shader1'
import { Shader as Shader2 } from '../components/Shader2'
import { Shader as Shader3 } from '../components/Shader3'
import { Shader as Shader4 } from '../components/Shader4'
import { Shader as Shader5 } from '../components/Shader5'

function App() {
  return (
    <main>
      <h1>Paper Shaders <a href="https://shaders.paper.design/">LINK</a></h1>

      <div className="gallery">
        <Shader />
        <Shader2 />
        <Shader3 />
        <Shader4 />
        <Shader5 />
      </div>
    </main>
  )
}

export default App
