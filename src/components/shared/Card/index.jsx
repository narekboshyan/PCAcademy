import clsx from "clsx";
import React from "react";
import classes from "./index.module.scss";

const Card = ({ children, className }) => {
    return <div className={clsx(classes.card, className)}>{children}</div>;
};

export default Card;
