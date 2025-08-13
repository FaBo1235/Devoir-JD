import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center">
                <div className="text-sm font-bold uppercase">
                    <h1><Link to="/">john doe</Link></h1>
                </div>

        
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    {isOpen ? (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                    ) : (
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                    )}
                    </svg>
                </button>

                <ul className="hidden md:flex gap-4 list-none uppercase ">
                    <li>
                        <Link className="hover:text-white transition-colors hover:underline hover:font-bold" to="/">home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-colors hover:underline hover:font-bold" to="/Service">services</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-colors hover:underline hover:font-bold" to="/Portfolio">portfolio</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-colors hover:underline hover:font-bold" to="/Contact">contact</Link>
                    </li>
                    <li>
                        <Link className="hover:text-white transition-colors hover:underline hover:font-bold" to="/About">mentions légales</Link>
                    </li>
                </ul>
            </div>

      
            {isOpen && (
            <ul className="flex flex-col gap-2 mt-4 md:hidden uppercase">
                <li>
                    <Link
                    className="hover:text-white transition-colors hover:underline hover:font-bold"
                    to="/"
                    onClick={() => setIsOpen(false)}>home</Link>
                </li>
                <li>
                    <Link
                    className="hover:text-white transition-colors hover:underline hover:font-bold"
                    to="/Service"
                    onClick={() => setIsOpen(false)}>services</Link>
                </li>
                <li>
                    <Link
                    className="hover:text-white transition-colors hover:underline hover:font-bold"
                    to="/Portfolio"
                    onClick={() => setIsOpen(false)}>portfolio</Link>
                </li>
                <li>
                    <Link
                    className="hover:text-white transition-colors hover:underline hover:font-bold"
                    to="/Contact"
                    onClick={() => setIsOpen(false)}>contact</Link>
                </li>
                <li>
                    <Link
                    className="hover:text-white transition-colors hover:underline hover:font-bold"
                    to="/About"
                    onClick={() => setIsOpen(false)}>mentions légales</Link>
                </li>
            </ul>
            )}
        </nav>
    );
}