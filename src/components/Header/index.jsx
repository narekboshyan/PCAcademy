import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "assets/react-logo.gif";

const Header = () => {
    const location = useLocation();
    const routes = [
        {
            to: "/",
            pageName: "Home",
            className: location.pathname === "/" ? classes.activeClassName : "",
        },
        {
            to: "/about",
            pageName: "About",
            className:
                location.pathname === "/about" ? classes.activeClassName : "",
        },
        {
            to: "/education",
            pageName: "Education",
            className:
                location.pathname === "/education"
                    ? classes.activeClassName
                    : "",
        },
        {
            to: "/contact",
            pageName: "Contact",
            className:
                location.pathname === "/contact" ? classes.activeClassName : "",
        },
        {
            to: "/sign-in",
            pageName: "Sign in",
            className:
                location.pathname === "/sign-in" ? classes.activeClassName : "",
        },
        {
            to: "/sign-up",
            pageName: "Sign up",
            className:
                location.pathname === "/sign-up" ? classes.activeClassName : "",
        },
    ];

    console.log(routes);

    return (
        <header className={classes.header}>
            <menu className={classes.menu}>
                <nav className={classes.nav}>
                    <ul className={classes.ul}>
                        <Link to="/" className={classes.logoContainer}>
                            <img src={logo} alt="Logo" />
                        </Link>
                        {routes.map((route) => (
                            <li key={route.to}>
                                <Link to={route.to} className={route.className}>
                                    {route.pageName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </menu>
        </header>
    );
};

export default Header;
