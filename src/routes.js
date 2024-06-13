import Home from './pages/Home.js'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'

export default function routes(){
    return(
        <Routes>
            <Route path='/home' element={<Login/>}/>
            <Route path='/app' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}