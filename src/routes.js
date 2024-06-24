import Home from './pages/Home.js'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import IAService from './pages/IAService.js'

export default function routes(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/iaservice' element={<IAService/>}/>
        </Routes>
    )
}