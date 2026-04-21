import { Link, useLocation } from "react-router-dom";
import { PackageSearch, Map, CalendarPlus, Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Track Trip/Cargo", path: "/track", icon: <PackageSearch className="w-4 h-4 mr-2" /> },
    { name: "Live Fleet", path: "/fleet", icon: <Map className="w-4 h-4 mr-2" /> },
    { name: "Book Ticket/Cargo", path: "/book", icon: <CalendarPlus className="w-4 h-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col justify-center">
              <div className="flex items-center">
                <img 
                  src="/Masterp.png" 
                  alt="Master P Global Logo" 
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    // Fallback to text if the image is not uploaded correctly
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('logo-fallback');
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="ml-3 text-3xl font-display font-black text-brand-navy tracking-tighter">
                  MASTER P <span className="text-brand-accent">GLOBAL</span>
                </span>
                <span id="logo-fallback" className="text-3xl font-display font-black text-brand-navy tracking-tighter" style={{ display: 'none' }}>
                  MASTER P <span className="text-brand-accent">GLOBAL</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "flex items-center text-sm font-semibold transition-colors duration-200 uppercase tracking-wide",
                    location.pathname === link.path
                      ? "text-brand-accent border-b-2 border-brand-accent pb-1"
                      : "text-brand-navy hover:text-brand-accent pb-1 border-b-2 border-transparent"
                  )}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link
              to="/track"
              className="px-6 py-2.5 rounded-full bg-brand-navy text-white text-sm font-bold uppercase tracking-wider hover:bg-brand-navy-light transition-all flex items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShieldCheck className="w-4 h-4 mr-2" />
              Client Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-accent p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wider",
                  location.pathname === link.path
                    ? "text-brand-accent bg-green-50"
                    : "text-brand-navy hover:text-brand-accent hover:bg-gray-50"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/track"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-brand-navy hover:bg-brand-navy-light uppercase tracking-wider"
              >
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
