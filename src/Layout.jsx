import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer"

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main>
               <Outlet/> 
            </main>
            
            <Footer/>
        
        </div>
    )
}
