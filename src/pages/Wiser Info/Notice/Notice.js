/** @format */

import "./Notice.css";

import { NavLink } from "react-router-dom";
import { Pagination, PaginationItem } from "reactstrap";
import { useTranslation } from "react-i18next";

export default function Notice({ page, notices, isPending, error }) {
    const { t, i18n } = useTranslation();

    // const lang = i18n.language;

    const lowerLim = page * 10;
    const currentNotice = [...notices].splice(lowerLim, 10);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div className="wwsc-container">
                <div className="img-text-container">
                    <h1>{t("notice.title")}</h1>

                    {isPending && <div className="load">{t("notice.load")}</div>}
                    {error && <div className="load">{error}</div>}
                    {notices && (
                        <div className="notice-container">
                            <div className="notice-list">
                                <div className="page-container">
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
                                {notices &&
                                    currentNotice.map((notice) => (
                                        <div className="card" style={{ marginBottom: "2rem", padding: "2rem" }}>
                                            <div className="text" style={{ margin: "1rem" }}>
                                                <h3>{notice.title.rendered}</h3>
                                                <small className="notice-info">
                                                    {t("notice.post")} {new Date(notice.date).toLocaleDateString()}
                                                    {/* {t("notice.post")} {new Date(notice.date).getFullYear().toString()} */}
                                                </small>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: notice.excerpt.rendered.split("</p>")[0] + "</p>",
                                                    }}
                                                    className="notice-content"
                                                />
                                                <p
                                                    className="read-more-link"
                                                    style={{ textAlign: "right", marginRight: "20px" }}
                                                >
                                                    <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug.toString()}>
                                                        {t("notice.more")}
                                                    </NavLink>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                <div className="page-container">
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
                            <div className="notice-sidebar">
                                <h3>Recent Notices</h3>
                                <ol className="recent-notice-list">
                                    {notices &&
                                        [...notices].splice(0, 5).map((notice) => (
                                            <li className="recent-notice-item">
                                                <NavLink to={"/wiser-info/wwsc-notices/" + notice.slug.toString()}>
                                                    {notice.title.rendered}
                                                </NavLink>
                                            </li>
                                        ))}
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
