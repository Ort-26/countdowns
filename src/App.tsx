 import { BrowserRouter } from 'react-router-dom'
import { RouterConfig } from './navigation/RouterConfig'

function App() { 

  return (
    <>
      <BrowserRouter basename={'/'}>
        <RouterConfig/>
      </BrowserRouter>
    </>
  )
}

export default App
