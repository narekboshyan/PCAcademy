import React, { Fragment } from "react";
import Wrapper from "components/shared/Wrapper";
import react from "assets/development.gif";
import classes from "./index.module.scss";
import Card from "components/shared/Card";
import "./index.scss";
import clsx from "clsx";
import { jsTools } from "helpers/section2Helpers";

const HomePage = () => {
    return (
        <Wrapper className={classes.wrapperWidth}>
            <section className={classes.section1}>
                <div className={classes.imageContainer}>
                    <img src={react} alt="Developer Animation" />
                </div>
                <div className={classes.suggestion}>
                    <h3>Why to become a Web Developer ?</h3>
                    <div>
                        <p>
                            Web development has a number of pros: High earning
                            potential, opportunity for growth, and flexibility
                            are usually top of mind for most who get into the
                            industry. Some of the challenges for people who
                            pursue web development is the competitive nature of
                            the job market.
                        </p>
                        <br />
                        <p>
                            One of the perks of being a web developer is whether
                            you work as a freelance or working for a company,
                            you do the job from anywhere as long as you have a
                            laptop and an internet connection.
                        </p>
                    </div>
                </div>
            </section>
            <section className={classes.section2}>
                <h4>Web development tools we provide</h4>
                <div className={classes.developmentTools}>
                    {jsTools.map((tool) => (
                        <Fragment>
                            <div className="card">
                                <div className="card__side card__side--front">
                                    <div className="card__picture card__picture--1">
                                        <div
                                            className="card__picture-logo__container"
                                            style={tool.class || {}}
                                        >
                                            <img
                                                src={tool.logo}
                                                alt={tool.toolName}
                                                className="card__picture_logo"
                                            />
                                        </div>
                                    </div>
                                    <h4 className="card__heading">
                                        <span className="card__heading-span card__heading-span--1">
                                            {tool.description}
                                        </span>
                                    </h4>
                                    <div
                                        className="card__details"
                                        style={tool.scheduleStyling || {}}
                                    >
                                        <ul>
                                            <li>
                                                Duration: {tool.lessonSchedule}
                                            </li>
                                            {tool.schedule?.map((schedule) => (
                                                <li>{schedule.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="card__side card__side--back card__side--back-1">
                                    <div className="card__cta">
                                        <div className="card__price-box">
                                            <p className="card__price-only">
                                                Only
                                            </p>
                                            <p className="card__price-value">
                                                $297
                                            </p>
                                        </div>
                                        <a
                                            href="#popup"
                                            className="btn btn--white"
                                        >
                                            Book now!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </section>
        </Wrapper>
    );
};

export default HomePage;
