import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white text-sm p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between align-bottom gap-4 text-sm">
          <div className="flex-1/3">
            <h3 className="font-bold mb-2 text-lg">John Doe</h3>
            <p>
            40 rue Laure Etsibold<br />
            69000 Lyon, France</p>
            <p>
            10 20 40 50<br />
            johndoe@gmail.com</p><br />
            <div className="flex flex-row gap-2">
              <div className="w-8 h-8">
                <img src="src/assets/favicon/github.png" alt="logo github" />
              </div>
              <div className="w-8 h-8">
                <img src="src/assets/favicon/twitter.png" alt="logo twitter" />
              </div>
              <div className="w-8 h-8">
                <img src="src/assets/favicon/logo-linkedin.png" alt="logo linkedin" />
              </div>
            </div>
          </div>
          <div className="flex-1/3">
            <h3 className="font-bold mb-2 text-lg">Liens utiles</h3>
            <ul className="space-y-1 list-none">
              <li><Link to="/home" className="hover:text-gray-300 transition-colors">Accueil</Link></li>
              <li><Link to="/Services" className="hover:text-gray-300 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link></li>
              <li><Link to="/Services" className="hover:text-gray-300 transition-colors">Me contacter</Link></li>
              <li><Link to="/about" className="hover:text-gray-300 transition-colors">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="flex-1/3">
            <h3 className="font-bold mb-2 text-lg">Mes dernières réalisations</h3>
            <ul className="space-y-1 list-none">
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Fresh Food</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Restaurant Akta</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Espace bien être</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">SEO</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Création d'une API</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300 transition-colors">Maquette d'un site</Link></li>
           </ul>
          </div>

          <div>
            
          </div>
        </div>
      </footer>
    );
  }