import React from "react";
import clsx from "clsx";
import classes from "./index.module.scss";

const Wrapper = ({ children, className }) => {
    return <div className={clsx(classes.wrapper, className)}>{children}</div>;
};

export default Wrapper;
