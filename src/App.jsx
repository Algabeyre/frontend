import './App.css'

function App() {

  return (
    <>
   <div>
    
    </div> 
    <Text display="Hello, Vite + React!" />
    <Text display="Hello, frontend, Vite + React!" />
       </>
  )
}
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}


export default App
