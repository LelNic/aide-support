import axios from "axios";
import { useForm } from "react-hook-form";
import "./FormJs.css";

const FormJs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios
            .post(`https://webdev-support.herokuapp.com/api/javascripts`, {
                name: data.name,
                text: data.text,
                code: data.code,
                category: data.category,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <h1>Formulaire d'ajout Javascript</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nom">Nom de l'entrée</label>
                <input placeholder="Nom" {...register("name", { required: true })} />
                {errors.text && <span className="error">Ce Champ est requis</span>}
                <label htmlFor="category">Catégorie</label>
                <select {...register("category")}>
                    <option value="Tableaux">Tableaux</option>
                    <option value="Objets">Objets</option>
                    <option value="DOM">Dom</option>
                    <option value="Fonctions">Fonctions</option>
                    <option value="Affichage">Affichage</option>
                    <option value="Conditions">Conditions</option>
                    <option value="Boucles">Boucles</option>
                    <option value="Variable">Variable</option>
                    <option value="POO">POO</option>
                </select>
                {errors.text && <span className="error">Ce Champ est requis</span>}
                <label htmlFor="text">Texte descriptif</label>
                <textarea placeholder="Texte explicatif" {...register("text", { required: true })} />
                {errors.text && <span className="error">Ce Champ est requis</span>}
                <label htmlFor="code">Code correspondant</label>
                <input placeholder="Le Code c'est le Code ...?" type="text" {...register("code", { required: true })} />
                {errors.text && <span className="error">Ce Champ est requis</span>}

                <input type="submit" />
            </form>
        </>
    );
};

export default FormJs;
