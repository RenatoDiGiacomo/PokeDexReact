import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    const [active, setActive] = React.useState(false);

    const handleActive = () => {
        setActive(!active);

    };

    return (
        <nav id="menu" className={active ? "active" : ""} onClick={handleActive}>
            <ul className={active ? "active" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="pokemon">Pokemon</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
