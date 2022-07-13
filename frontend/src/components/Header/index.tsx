import logo from '../../Assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por <a href="https://www.youtube.com">Gustavo Dias</a> </p>
            </div>
        </header>
    )
}

export default Header;
