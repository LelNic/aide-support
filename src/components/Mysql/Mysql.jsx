import React from "react";
import "./Mysql.css";
const Sql = () => {
  return (
    <>
      <h2>My Sql</h2>
      <h3> Commande Importante</h3>
      <p>
        ASC = trier Du plus petit au plus grand <br />
        <a href="https://www.w3schools.com/sql/sql_ref_asc.asp">voir les détails </a>
        <br />
        <br />
        DELETE= permet de supprimer une ou plusieurs lignes, selon certaines conditions
        <br />
        <a href="https://sql.sh/cours/delete">voir les détails</a>
        <br />
        <br />
        DESC = trier du plus frand au plus petit
        <br />
        <a href="https://www.w3schools.com/sql/sql_ref_desc.asp">voir les détails</a>
        <br />
        <br />
        DESCRIBE = Décrit soit les colonnes d’une table, soit les valeurs actuelles
        <br />
        <a href="https://docs.snowflake.com/fr/sql-reference/sql/desc-table.html">voir les détails</a>
        <br />
        <br />
        INSERT INTO = ajoute des données dans une table
        <br />
        <a href="https://sql.sh/?s=INSERT&submit=Rechercher">voir les détails</a>
        <br />
        <br />
        LIKE= L’opérateur LIKE est utilisé dans la clause WHERE des requêtes SQL. Ce mot-clé permet d’effectuer une recherche
        sur un modèle particulier
        <br />
        <a href="https://sql.sh/cours/where/like">voir les détails</a>
        <br />
        <br />
        SELECT = sélectionner une ou plusieurs colonnes d’une table exemple : SELECT nom_du_champ FROM nom_du_tableau
        <br />
        <a href="https://sql.sh/?s=SELECT&submit=Rechercher">voir les détails</a>
        <br />
        <br />
        SET = La commande SET est utilisée avec UPDATE pour spécifier les colonnes et les valeurs qui doivent être mises à
        jour dans une table.
        <br />
        <a href="https://www.w3schools.com/sql/sql_ref_set.asp">voir les détails</a>
        <br />
        <br />
        SHOW = affiche une table : exemple #SHOW TABLE wizard#
        <br />
        <br />
        TRUNCATE = supprime toutes les données d’une table sans supprimer la table en elle-même
        <br />
        <a href="https://sql.sh/cours/truncate-table">voir les détails</a>
        <br />
        <br />
        UPTDATE = modifier
        <br />
        VALUES = quand on ajoute du contenues avec INSERT TO *nom de la table* on ajoute VALUES(*nom du contenue a ajouter*)
        <br />
        WHERE= pour une recherche spécifique exemple # WHERE lastname = 'Potter' #<br />
      </p>
    </>
  );
};

export default Sql;
