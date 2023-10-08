/** @format */

import "./Notice.css";

import { NavLink } from "react-router-dom";
import { Pagination, PaginationItem } from "reactstrap";

export default function Notice({ page, notices, isPending, error }) {
    const lowerLim = page * 10;
    const currentNotice = [...notices].splice(lowerLim, 10);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>Notices of World Wiser Sport Committee</h1>
                    {isPending && <div className="load">Loading notices...</div>}
                    {error && <div className="load">{error}</div>}
                    {notices && (
                        <div className="notice-container">
                            <div className="notice-sidebar">
                                <ol>
                                    <h3>Recent Notices</h3>
                                    <hr className="solid" />
                                    {notices &&
                                        [...notices].splice(0, 5).map((notice) => (
                                            <li>
                                                <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug.toString()}>
                                                    {notice.title.rendered}
                                                </NavLink>
                                            </li>
                                        ))}
                                </ol>
                            </div>
                            <div className="notice-list">
                                {notices &&
                                    currentNotice.map((notice) => (
                                        <div className="text" style={{ margin: "2rem" }}>
                                            <h3>{notice.title.rendered}</h3>
                                            <small className="by">
                                                Posted on {new Date(notice.date).toLocaleDateString()} by WWSC in
                                                Notices
                                            </small>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: notice.excerpt.rendered.split("</p>")[0] + "</p>",
                                                }}
                                                className="content"
                                            />
                                            <NavLink
                                                to={"/wiser-info/wwsc-notices/" + notice.slug.toString()}
                                                className="read-link"
                                            >
                                                Read More...
                                            </NavLink>
                                            <hr />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                    <div className="page">
                        <Pagination>
                            {Array(Math.ceil(notices.length / 10))
                                .fill(0)
                                .map((_, i) => (
                                    <PaginationItem className="page-numbers">
                                        {
                                            <NavLink
                                                to={"/wiser-info/wwsc-notices-" + (i + 1)}
                                                onClick={scrollToTop}
                                                style={{ textDecoration: "none" }}
                                                className="number"
                                            >
                                                {i + 1}
                                            </NavLink>
                                        }
                                    </PaginationItem>
                                ))}
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    );
}
