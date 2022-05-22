import React from "react";
import { useRoutes } from "react-router-dom";
import App from "./App";
import About from "./pages/About/Index";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import HomePage from "./pages/HomePage";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Routes = () => {
    const routes = useRoutes([
        { path: "/", element: <HomePage /> },
        { path: "/sign-in", element: <Signin /> },
        { path: "/sign-up", element: <SignUp /> },
        { path: "/about", element: <About /> },
        { path: "/education", element: <Education /> },
        { path: "/contact", element: <Contact /> },
    ]);
    return routes;
};

export default Routes;
