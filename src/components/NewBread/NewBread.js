/** @format */

import "./NewBread.css";

import { useLocation, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default function NewBread() {
    const location = useLocation();
    let currentLink = "";

    let crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentLink += `/${crumb}`;

            return (
                <div>
                    <BreadcrumbItem active>
                        /
                        <Link
                            style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                                textDecoration: "none",
                                color: "gray",
                                pointerEvents: "none",
                            }}
                        >
                            {crumb
                                .split("-")
                                .map((word) =>
                                    word === "wwsc" ? word.toUpperCase() : word[0].toUpperCase() + word.slice(1)
                                )
                                .join(" ")}
                        </Link>
                    </BreadcrumbItem>
                </div>
            );
        });

    crumbs.unshift(
        <div>
            <BreadcrumbItem active>
                <Link exact to={"/"} style={{ marginRight: "5px" }}>
                    Home
                </Link>
            </BreadcrumbItem>
        </div>
    );

    const display = location.pathname !== "/" && !(location.pathname.slice(1).split("-")[0] === "referee");

    return (
        <>
            {display && (
                <div>
                    <Breadcrumb listTag="div" className="bread">
                        {crumbs}
                    </Breadcrumb>
                </div>
            )}
        </>
    );
}
