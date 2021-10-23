import {
    Link
} from "react-router-dom";

function Header(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-start">
                    {props.links?.map((link) => {
                        return (
                                <Link to={link.url} className="navbar-item">{link.text}</Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}

export default Header;
