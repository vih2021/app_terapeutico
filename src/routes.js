import Home from './pages/Home.js'
import { Route, Routes} from 'react-router-dom'

export default function routes(){
    return(
        <Routes>
            <Route path='/' element={ < Home /> }/>
        </Routes>
    )
}