import React, { useState, useEffect, createElement } from "react";
import axios from "axios";
import github from "../../asset/Octocat.png";
import merge from "../../asset/merge.png";
import "./Github.css";

const Github = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let line = document.createElement("span");
        line.textContent = "1";
        for (const item of document.querySelectorAll(".code")) {
            item.insertAdjacentElement("afterbegin", line);
        }
        const urlGithub = "https://127.0.0.1:8000/api/githubs";
        axios.get(urlGithub).then(({ data }) => {
            setItems(data["hydra:member"]);
        });
    }, []);

    return (
        <>
            <h1>GitHub</h1>
            <h2>Les Bases</h2>
            <section>
                <img className="lettrine" src={github} alt="Logo CSS" />
                {items?.map((item) => (
                    <div key={item.id}>
                        <p>{item.text}</p>
                        <pre className="code">
                            <span>{item.code}</span>
                        </pre>
                    </div>
                ))}
            </section>
            <h2>Les Branches</h2>
            <section>
                <img className="lettrine" src={merge} alt="Logo CSS" />
                <p> Creation d'une nouvelle branche(commande a taper sur le terminal)</p>
                <pre>git branch(nom de branche)</pre>
                <p>Liste des branches(commande a taper sur le terminal)</p>
                <pre>git branch</pre>
                <p>Deplace le depot sur la branche indiquée(commande a taper sur le terminal)</p>
                <pre>git checkout (nom de branche)</pre>
                <p>Fusionne la branche avec celle nommée (commande a taper sur le terminal)</p>
                <pre>git merge (nom de branche)</pre>
                <p>Supprime la branche specifiée(commande a taper sur le terminal)</p>
                <pre>git branch -d (nom de branche)</pre>
            </section>
            <h2>Les erreurs</h2>
            <section>
                <p>Montre l'historique des versions pour la branche actuel(commande a taper sur le terminal)</p>
                <pre>git log</pre>
                <p>Annule tous les commits en les conservants local (commande a taper sur le terminal)</p>
                <pre>git reset[commit]</pre>
                <p>
                    supprime tous l'historique et les modification effectues apres les commits(commande a taper sur le
                    terminal)
                </p>
                <pre>git reset hard[commit]</pre>
                <p>Restaure des fichiers de l'arbre de travail(commande a taper sur le terminal)</p>
                <pre>git checkout</pre>
                <p>
                    cree un commit qui en annule un autre le commit precedent n'est pas effacer(commande a taper sur le
                    terminal)
                </p>
                <pre>git revert</pre>
                <p>cree un commit qui remplace le precedent(commande a taper sur le terminal)</p>
                <pre>git commit -- amend</pre>
                <p>
                    remet a zero tous le commit effectué apret le commit nommé le parametre "hard efface aussi les
                    fichiers(commande a taper sur le terminal)
                </p>
                <pre>git reset</pre>
            </section>
        </>
    );
};

export default Github;
