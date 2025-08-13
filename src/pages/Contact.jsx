import { Link } from "react-router-dom";


export default function Contact() {
    return (
    
        <main className="flex flex-row items-center px-4 py-12 max-sm:flex-col">
            <div className="flex flex-auto flex-col">
                <h1 className="text-5xl font-bold mb-2 text-center">Contact</h1>
                <p className="mb-8 text-center">
                    Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir ce formulaire.
                </p>
                <div className="h-1 w-90 bg-blue-500 mx-auto mt-2 mb-8"></div>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
                    
                    <div className="md:w-1/2">
                        <h1 className="text-xl font-bold mb-4 border-b-2 border-blue-500 py-4">Formulaire de contact</h1>
                        <form className="space-y-4">
                            <input classNametype="text" 
                            placeholder="Votre nom" 
                            className="w-full border border-gray-300 p-2 rounded placeholder:text-gray-500" />

                            <input type="email" 
                            placeholder="Votre adresse email" 
                            className="w-full border border-gray-300 p-2 rounded placeholder:text-gray-500" />

                            <input type="tel" 
                            placeholder="Votre numéro de téléphone" 
                            className="w-full border border-gray-300 p-2 rounded placeholder:text-gray-500" />

                            <input type="text" 
                            placeholder="Sujet" 
                            className="w-full border border-gray-300 p-2 rounded placeholder:text-gray-500" />

                            <textarea placeholder="Votre message" 
                            rows={5} className="w-full border border-gray-300 p-2 rounded placeholder:text-gray-500"></textarea>

                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-gray-700">
                                Envoyer
                            </button>
                        </form>
                    </div>

                    
                    <div className="md:w-1/2">
                        <h1 className="text-xl font-bold mb-4 border-b-2 border-blue-500 py-4">Mes coordonnées</h1>
                        <div className="space-y-3 mb-4">
                            <p>John Doe</p>
                            <p>📍 40 rue Laure Diebold</p>
                            <p>69009 Lyon, France</p>
                            <p>📞 10 20 30 40 50</p>
                            <p>✉️ john.doe@gmail.com</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
                            className="w-full h-[250px] rounded shadow"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
}