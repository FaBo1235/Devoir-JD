//import { Link } from "react-router-dom";
import hero from "../assets/img/portfolio/hero-bg.jpg"
import joe from "../assets/img/portfolio/john-doe-about.jpg"


export default function Home () {
    const skills = [
        { name: 'HTML', level: 90, color: "bg-red-500" },
        { name: 'CSS', level: 80, color: "bg-cyan-400" },
        { name: 'JAVASCRIPT', level: 70, color: "bg-yellow-400" },
        { name: 'PHP', level: 60, color: "bg-green-500" },
        { name: 'REACT', level: 50, color: "bg-blue-500" },
    ];

    return(
    <div className="flex flex-col bg-cover bg-center">
        <section 
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${hero})` }}
        >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Bonjour, je suis John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Développeur web full stack</h2>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded shadow">
                En savoir plus
                </button>
        </section>


        
        <section className="p-30 bg-white text-black">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          
          
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">À propos</h2>
                    <div className="h-2 bg-blue-500 my-10"></div>
                    <img src={joe} alt="homme assis à son bureau entouré de matériels de bureau"/>
                    <p className="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quibusdam ad reiciendis cupiditate sed odit voluptatibus facilis autem ut, iste mollitia esse, illum quas nam eligendi animi voluptates quo rerum.
                    </p>
                    <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    cum expedita ad numquam soluta ipsa maiores eaque cupiditate quo,
                    odit voluptatem ex nihil quis.
                    </p>
                    <p className="mb-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Blanditiis aspernatur obcaecati iste, nam asperiores at.
                    Explicabo modi rem doloribus nobis officia.
                    </p>
                </div>

          
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold mb-6">Mes compétences</h2>
                    <div className="h-2 bg-blue-500 my-10"></div>
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-6">
                            <div className="flex justify-between mb-1">
                                <span className="text-lg font-medium">{skill.name}</span>
                                <span className="text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-300 rounded-full h-4">
                            <div
                            className={`${skill.color} h-4 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                            ></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    </div>
  );
}
