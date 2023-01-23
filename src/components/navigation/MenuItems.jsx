import React, { useEffect, useRef, useState } from "react";

import DropDown from "./DropDown";

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
        ref.current.classList.add("active");
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
        ref.current.classList.remove("active");
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow" />
                        )}
                    </button>
                    <DropDown submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;
