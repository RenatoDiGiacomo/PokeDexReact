import React from "react";

const Menu = () => {
    const [active, setActive] = React.useState(false);

    const handleActive = () => {
        setActive(!active);

    };

    return (
        <nav id="menu" className={active ? "active" : ""} onClick={handleActive}>
            <ul className={active ? "active" : ""}>
                <li>
                    <a href="#">Item1</a>
                </li>
                <li>
                    <a href="#">Item1</a>
                </li>
                <li>
                    <a href="#">Item1</a>
                </li>
                <li>
                    <a href="#">Item1</a>
                </li>
                <li>
                    <a href="#">Item1</a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
