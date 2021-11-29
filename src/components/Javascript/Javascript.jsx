import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Javascript.css";

const Javascript = () => {
    const [list, setList] = useState();

    useEffect(() => {
        axios.get("https://webdev-support.herokuapp.com/api/javascripts?page=1").then(({ data }) => {
            setList(data["hydra:member"]);
        });
    }, []);

    console.log(list);
    return (
        <>
            <h1>JavaScript</h1>
            <h2>Tableaux</h2>
            <section>
                {list?.map((l) => (
                    <>
                        <p>{l.text}</p>
                        <pre>{l.code}</pre>
                    </>
                ))}
            </section>
        </>
    );
};

export default Javascript;
