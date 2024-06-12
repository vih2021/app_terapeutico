import { useNavigate } from 'react-router';
import '../css/Signup.css'

export default function Signup(){
    const navigate = useNavigate();

    function goHome() {
        navigate('/app')
    }

    return(
        <div className="signup__container">
            <div className="signup__form-container">
                <form className="signup__form" onSubmit={goHome}>
                    <h1 className="signup__h1">Realize seu cadastro</h1>
                    <div className="signup__input-container">
                        <label className="signup__label" htmlFor="usuario">
                            Usuário
                        </label>
                        <input className="signup__input" id="usuario" type="text" placeholder="Escreva seu usuário"/>
                    </div>
                    <div className="signup__input-container">
                        <label className="signup__label" htmlFor="email">
                            E-mail
                        </label>
                        <input className="signup__input" id="email" type="text" placeholder="Escreva seu e-mail"/>
                    </div>
                    <div className="signup__input-container">
                        <label className="signup__label" htmlFor="senha">
                            Senha
                        </label>
                        <input className="signup__input" id="senha" type="password" placeholder="Escreva sua senha"/>
                    </div>
                    <button className="signup__button" type="submit">
                        Cadastrar
                    </button>
                </form>
                <div>
                    <p className="signup__p">Já possui cadastro? <a className="signup__a" href="/">Realize o Login</a></p>
                </div>
            </div>
            <div className="signup__image-container">
                <img className="signup__img" src="/login.png" alt="Pessoa meditando."/>
            </div>
        </div>
    )
}