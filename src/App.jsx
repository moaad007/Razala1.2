
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Rooms from './pages/RoomPage.jsx'
import RoomPage from './pages/test.jsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' Component={HomePage}/>
      <Route path='/pages/RoomPage' Component={Rooms}/>
      <Route path="/pages/test"     Component={RoomPage} />
    
    </Routes>
    

    





    </BrowserRouter>
    

  )
    
 
}

export default App
