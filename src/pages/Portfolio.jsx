import Card from '../components/Card'
import DatasService from '../Services/DatasService'
import banner from '../assets/img/portfolio/banner.jpg'


function Portfolio() {
    const realisations = DatasService()
    return (
        
        <div>
            <header
            className="h-60 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}
            ></header>
            
            <div className="w-2/3 p-4 m-auto">
                <h1 className="text-5xl font-bold mb-4 text-center">Portfolio</h1>
                <h2 className="text-center">Voici quelques-une de mes réalisations.</h2>
                <div className="h-1 w-40 bg-blue-500 mx-auto mt-2 mb-8"></div>
                <section className='flex flex-row flex-wrap justify-center gap-8 my-8'>
                    {realisations.projects.map((project) => (
                        <Card real={project} />
                    ))}
                </section>
            </div>
        </div>
    )
}


export default Portfolio