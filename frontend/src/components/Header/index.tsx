import logo from '../../assets/imgs/logo_header.svg'
import './style.css'


function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="logo" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/fabio_lucs" target="blank">@fabio_lucas</a>
                </p>
            </div>
        </header>

    )

}

export default Header