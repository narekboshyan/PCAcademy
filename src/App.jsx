import React, { Fragment } from "react";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import Routes from "./Routes";
import Wrapper from "components/shared/Wrapper";

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 0.99,
    },
    in: {
        opacity: 1,
        scale: 1,
    },
    out: {
        opacity: 0,
        scale: 1.01,
    },
};
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
};
function App() {
    return (
        <Fragment>
            <Header />
            <Wrapper>
                <Routes />
            </Wrapper>
        </Fragment>
    );
}

export default App;
