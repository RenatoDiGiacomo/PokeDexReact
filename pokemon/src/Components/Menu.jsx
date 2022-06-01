import React from "react";

const Menu = () => {
    const [active, setActive] = React.useState(false);
    const [activeList, setActiveList] = React.useState(false);

    const handleActive = () => {
        setActive(!active);
        setInterval(() => {
            setActiveList(!activeList);
        }, 1000);
    };

    return (
        <nav id="menu" className={active ? "active" : ""} onClick={handleActive}>
            <ul className={activeList ? "active" : ""}>
                <li>
                    <p>Item1</p>
                </li>
                <li>
                    <p>Item1</p>
                </li>
                <li>
                    <p>Item1</p>
                </li>
                <li>
                    <p>Item1</p>
                </li>
                <li>
                    <p>Item1</p>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
