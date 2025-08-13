import { Link } from "react-router-dom";
import banner from "../assets/img/portfolio/banner.jpg";
import brosser from "../assets/img/portfolio/brosser.png";
import dev from "../assets/img/portfolio/developpeur.png";
import loupe from "../assets/img/portfolio/loupe.png"

function Service() {

    return (
        <div>
            <header
            className="h-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
            ></header>

            <div className="p-10">
                <h1 className="text-5xl font-bold mb-4 text-center">Mon offre de services</h1>
                <h2 className="text-center">Voici les prestations sur lesquelles je peux intervenir.</h2>
                <div className="h-1 w-40 bg-blue-500 mx-auto mt-2 mb-8"></div>
            </div>

            <section className="font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 p-10 text-justify">

                <div className="border border-gray-400 rounded flex-1/3">

                    <img className="w-10 h-10 mx-auto flex justify-center items-center m-20" src={brosser} alt="" />
                    <h1 className="font-bold text-2xl text-center">UX Design</h1>
                    <p className="text-center">L'UX Design est une discipline qui consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupants. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.</p>

                </div>
                <div className="border border-gray-400 rounded flex-1/3">
                    <img className="w-10 h-10 mx-auto flex justify-center items-center m-20" src={dev} alt="" />
                    <h1 className="font-bold text-2xl text-center">Développement web</h1>
                    <p className="text-center">Le développement de sites web consiste à créer des sites internets en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)</p>
                </div>
                <div className="border border-gray-400 rounded flex-1/3">
                    <img className="w-10 h-10 mx-auto flex justify-center items-center m-20" src={loupe} alt="" />
                    <h1 className="font-bold text-2xl text-center">Référencement</h1>
                    <p className="text-center">Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximium de visiteurs qualifiés sur le site.</p>
                </div>
            </div>
            </section>
        </div>
    );
}

export default Service