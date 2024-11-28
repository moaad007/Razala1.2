import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Rooms from './pages/RoomPage.jsx'
import RoomPage from './pages/test.jsx' // Changed file name
function App() {
  return (
    <BrowserRouter>
    <Routes>


      <Route path='/Razala1.2/' element={<HomePage />} />
      <Route path='/Razala1.2/pages/RoomPage' element={<Rooms />} />
      <Route path= '/Razala1.2/pages/test' element={<RoomPage />} /> 
    </Routes>


    </BrowserRouter>

  )


}
export default App