/** @format */

import "./CustomDrop.css";

import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";

import { useState } from "react";

export default function CustomDrop({ title, link, linkList, drop, caret = true }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((prevState) => !prevState);

    return (
        <div>
            <Dropdown className="nav-dropdown" isOpen={open} onMouseEnter={toggle} onMouseLeave={toggle} toggle={toggle}>
                <DropdownToggle caret={caret} className="nav-dropdown-toggle" size="xlg" color="">
                    <NavLink exact to={link} className="nav-dropdown-link">
                        {title}
                    </NavLink>
                </DropdownToggle>
                {drop && (
                    <DropdownMenu className="nav-dropdown-menu">
                        {linkList.map((elem) => (
                            <DropdownItem className="nav-dropdown-item" style={{ width: "100%" }}>
                                <NavLink exact to={elem.link} className="nav-dropdown-link">
                                    {elem.title}
                                </NavLink>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                )}
            </Dropdown>
        </div>
    );
}
