import { useState } from "react";



function About() {
    const [open, setOpen] = useState("editeur");
    const toggle = (section) => {
        setOpen(open === section ? null : section);
    };
    return (

        <main>
            <h1 className="text-4xl font-bold text-center m-10">Mentions légales</h1>
            <div className="h-1 w-100 bg-blue-500 mx-auto my-6"></div>

            <div className="rounded-lg border shadow border-gray-400 m-50 mt-auto pb-4">

                <button
                    className={`w-full flex justify-between items-center p-4 transition 
                    ${open === "editeur" ? "bg-blue-400" : "hover:bg-blue-400"}`}
                    onClick={() => toggle("editeur")}>Éditeur du site

                    <span className={`transition-transform ${open === "editeur" ? "rotate-180" : ""}`}>⌃</span>
                </button>

                {open === "editeur" && (
                <div className="p-4 bg-white text-gray-700 space-y-2">
                    <p className="font-bold">John Doe</p>
                    <p>🏢 40 rue Laure Diebold</p>
                    <p>📍 69009 Lyon, France</p>
                    <p>📞 10 20 30 40 50</p>
                    <p>✉️ john.doe@gmail.com</p>
                </div>
                )}

                <button
                    className={`w-full flex justify-between items-center p-4 transition 
                    ${open === "hebergeur" ? "bg-blue-400" : "hover:bg-blue-400"}`}
                    onClick={() => toggle("hebergeur")}>Hébergeur

                    <span className={`transition-transform ${open === "hebergeur" ? "rotate-180" : ""}`}>⌃</span>
                </button>

                {open === "hebergeur" && (
                <div className="p-4 bg-white text-gray-700 space-y-2">
                    <h1 className="text-2xl font-bold">alwaysdata</h1>
                    <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                    <div className="flex flex-row gap-2">
                    <img className="w-4 h-4" src="src/assets/favicon/linternet.png" alt="logo internet"/>
                    <a className="text-blue-400 underline" href="https://www.alwaysdata.com/fr/">https://www.alwaysdata.com/fr/</a>
                    </div>
                </div>
                )}


                <button
                    className={`w-full flex justify-between items-center p-4 transition 
                    ${open === "credits" ? "bg-blue-400" : "hover:bg-blue-400"}`}
                    onClick={() => toggle("credits")}>Crédits

                    <span className={`transition-transform ${open === "credits" ? "rotate-180" : ""}`}>⌃</span>
                </button>

                {open === "credits" && (
                <div className="p-4 bg-white text-gray-700 space-y-2">
                    <p>Ce site a été réalisé par John Doe, étudiant au <a className="text-blue-400 underline" href="ttps://www.centre-europeen-formation.fr">Centre Européen de formation</a>.</p>
                    <p className="italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a className="text-blue-400 underline" href="https://pixabay.com">Pixabay</a>.</p>
                    <p className="italic">La favicon de ce site a été fournie par <a className="text-blue-400 underline" href="https://www.flaticon.com">John Doe Icons erstekkt von Freepik - Flaticon</a>.</p>
                </div>
                 )}
            </div>
        </main>
    );
    
}

export default About