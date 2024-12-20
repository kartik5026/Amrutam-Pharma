import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import FindDoc from './Pages/FindDoc';
import About from './Pages/About';
import Profile from './Pages/Profile';
function App() {


  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route index element={<FindDoc/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/find' element={<FindDoc/>}></Route>
      </Routes>
    </>
  )
}

export default App
