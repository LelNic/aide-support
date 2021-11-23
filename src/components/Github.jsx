import React from "react";
import "./Github.css";

const Github = () => {
  return (
    <div>
      <h2>GitHub</h2>
      <h3> Les Bases</h3>
      <section>
        <p> initie un depot Github en "local"(commande a taper sur le terminal ou VsCode)</p>
        <pre>git init</pre>
        <p> Ajoute un ou des fichiers a l'index Git.(commande a taper sur le terminal)</p>
        <pre>git add .</pre>
        <p>
          permet de faire le point sur l'index de git fichier suivis ,fichier non suivis avancés des branches local(commande
          a taper sur le terminal)
        </p>
        <pre>git status</pre>
        <p> Versionne le projet avec un commentaire.(commande a taper sur le terminal)</p>
        <pre>git commit -m ""</pre>
        <p> Permet de pousser une branche d'un depot local vers le remote.(commande a taper sur le terminal)</p>
        <pre>git push origin (nom de branche)</pre>
        <p>
          telecharger un depot distant,puis met a jour immediatement le depot localqui corespond a ce contenue.(commande a
          taper sur le terminal)
        </p>
        <pre>git pull origin (nom de branche)</pre>
        <p>permet de cloneé un repot distantavec un lien SSh(commande a taper sur le terminal)</p>
        <pre>git clone git@github.com:plop/projet1.git</pre>
      </section>
      <section>
        <h3>Les Branches</h3>
        <p> creation d'une nouvelle branche(commande a taper sur le terminal)</p>
        <pre>git branch(nom de branche)</pre>
        <p>liste des branches(commande a taper sur le terminal)</p>
        <pre>git branch</pre>
        <p>deplace le depot sur la branche indiquée(commande a taper sur le terminal)</p>
        <pre>git checkout (nom de branche)</pre>
        <p>Fusionne la branche avec celle nommée (commande a taper sur le terminal)</p>
        <pre>git merge (nom de branche)</pre>
        <p>supprime la branche specifiée(commande a taper sur le terminal)</p>
        <pre>git branch -d (nom de branche)</pre>
      </section>
      <section>
        <h3>les erreurs</h3>
        <p>Montre l'historique des versions pour la branche actuel(commande a taper sur le terminal)</p>
        <pre>git log</pre>
        <p>Annule tous les commits en les conservants local (commande a taper sur le terminal)</p>
        <pre>git reset[commit]</pre>
        <p>supprime tous l'historique et les modification effectues apres les commits(commande a taper sur le terminal)</p>
        <pre>git reset hard[commit]</pre>
        <p>Restaure des fichiers de l'arbre de travail(commande a taper sur le terminal)</p>
        <pre>git checkout</pre>
        <p>cree un commit qui en annule un autre le commit precedent n'est pas effacer(commande a taper sur le terminal)</p>
        <pre>git revert</pre>
        <p>cree un commit qui remplace le precedent(commande a taper sur le terminal)</p>
        <pre>git commit -- amend</pre>
        <p>
          remet a zero tous le commit effectué apret le commit nommé le parametre "hard efface aussi les fichiers(commande a
          taper sur le terminal)
        </p>
        <pre>git reset</pre>
      </section>
    </div>
  );
};

export default Github;
