import axios from "axios";
import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        axios
            .post(`https://webdev-support.herokuapp.com/api/${data.lang}s`, {
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
            <h1>Formulaire d'ajout de données</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nom">Nom de l'entrée</label>
                <input placeholder="Nom" {...register("name", { required: true })} />
                {errors.text && <span className="error">Ce Champ est requis</span>}
                <label htmlFor="category">Langage</label>
                <select {...register("lang")}>
                    <option value="html">Html</option>
                    <option value="css">Css</option>
                    <option value="javascript">Javascript</option>
                    <option value="react">React</option>
                    <option value="github">Github</option>
                    <option value="mysql">Mysql</option>
                </select>
                <label htmlFor="category">Catégorie</label>
                <input placeholder="Catégorie" {...register("category", { required: true })} />
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

export default Form;
