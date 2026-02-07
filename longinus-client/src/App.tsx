import './css/App.css'
import Board from './components/board/Board.tsx'

function App() {
  
  const centerAlignmentStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "64px",
    marginBottom: "64px",
  }

  return ( //TODO wrap in container.
    <div style={centerAlignmentStyle}>
      <Board/>
    </div>
    
  )
}

export default App
