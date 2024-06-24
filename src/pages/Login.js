import { useNavigate } from 'react-router';
import '../css/Login.css'

export default function Signup(){
    const navigate = useNavigate();

    function goHome() {
        navigate('/home')
    }

    return(
        <div className="login__container">
            <div className="login__form-container">
                <h1 className="login__login-title">Florescer</h1>
                <form className="login__form" onSubmit={goHome}>
                    <div className="login__input-container">
                        <label className="login__label" htmlFor="usuario">
                            Usuário
                        </label>
                        <input className="login__input" id="usuario" type="text" placeholder="Escreva seu usuário"/>
                    </div>
                    <div className="login__input-container">
                        <label className="login__label" htmlFor="senha">
                            Senha
                        </label>
                        <input className="login__input" id="senha" type="password" placeholder="Escreva sua senha"/>
                    </div>
                    <button className="login__confirm-button" type="submit">
                        Entrar
                    </button>
                </form>
                <div>
                    <p className="login__bottom-text">Não possui cadastro? <a href="/signup">Cadastrar</a></p>
                </div>
            </div>
            <div className="login__image-container">
                <img className="login__image" src="/login.png" alt="Pessoa meditando."/>
            </div>
        </div>
    )
}