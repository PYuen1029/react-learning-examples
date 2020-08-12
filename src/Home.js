import React, {useState} from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import HashScrollRestorer from "./HashScrollRestorer";

const Home = () => {
    const getClassName = () => 'Home';

    const data = [
        "Element 1",
        "Element 2",
        "Element 3",
        "Element 4",
        "Element 5",
        "Element 6",
        "Element 7",
        "Element 8",
        "Element 9",
        "Element 10",
        "Element 11",
        "Element 12",
        "Element 13",
        "Element 14",
        "Element 15",
        "Element 16",
        "Element 17",
        "Element 18",
        "Element 19",
        "Element 20",
        "Element 21",
        "Element 22",
        "Element 23",
        "Element 24",
        "Element 25",
        "Element 26",
        "Element 27",
        "Element 28",
        "Element 29",
        "Element 30",
        "Element 31",
        "Element 32",
        "Element 33",
        "Element 34",
        "Element 35",
        "Element 36",
        "Element 37",
        "Element 38",
        "Element 39",
        "Element 40",
        "Element 41",
        "Element 42",
        "Element 43",
        "Element 44",
        "Element 45",
        "Element 46",
        "Element 47",
        "Element 48",
        "Element 49",
        "Element 50",
        "Element 51",
        "Element 52",
        "Element 53",
        "Element 54",
        "Element 55",
        "Element 56",
        "Element 57",
        "Element 58",
        "Element 59",
        "Element 60",
        "Element 61",
        "Element 62",
        "Element 63",
        "Element 64",
        "Element 65",
        "Element 66",
        "Element 67",
        "Element 68",
        "Element 69",
        "Element 70",
        "Element 71",
        "Element 72",
        "Element 73",
        "Element 74",
    ]

    let history = useHistory(),
        location = useLocation();

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <div className={getClassName().toLowerCase()}>
                <h1>This is Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam, at beatae doloremque
                    eos
                    fuga fugit impedit labore magni nihil obcaecati provident quaerat quasi quisquam reiciendis rerum
                    saepe
                    suscipit, voluptate!45</p>
            </div>
            <HashScrollRestorer/>
            <ul>
                {data.map((elementLabel, idx) => {
                    idx++;

                    return (
                        <li key={idx}>
                            <Link to={`/detail/${idx}`}
                                  onClick={() => {
                                      history.push(
                                          location.pathname + '#/detail/' + idx,
                                      )
                                  }}
                            >
                                {elementLabel}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default Home;
