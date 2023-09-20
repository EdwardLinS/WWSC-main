/** @format */

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function CustomBread({ history }) {
    history = [{ title: "Home", link: "/" }, ...history];

    return (
        <div>
            <Breadcrumb listTag="div" className="bread">
                {history.map((elem, index) =>
                    index !== history.length - 1 && elem.link ? (
                        <BreadcrumbItem active>
                            <NavLink exact to={elem.link} style={{ fontSize: "2rem" }}>
                                {elem.title}
                            </NavLink>
                        </BreadcrumbItem>
                    ) : (
                        <BreadcrumbItem style={{ fontSize: "2rem" }}>{elem.title}</BreadcrumbItem>
                    )
                )}
            </Breadcrumb>
        </div>
    );
}
