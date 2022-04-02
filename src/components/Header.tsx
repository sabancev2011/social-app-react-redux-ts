import { Icons } from "."

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <button className="header__logoBtn">
                    <Icons className={"header__logo"} />
                    <h3>Social App</h3>
                </button>
            </div>
        </header>
    )
}

export default Header;