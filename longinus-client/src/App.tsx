import './css/App.css'
import Column from './components/column/Column.tsx'
import * as Utils from './util/Colours.ts'

function App() {

  return ( //TODO wrap in container.
    <div style={{display: "flex"}}>
      <Column colour1={Utils.LIGHT_LIGHT_BLUE}
              colour2={Utils.LIGHT_BLUE}
              colour3={Utils.BLUE}
              title="TODO"/>
    </div>
  )
}

export default App
