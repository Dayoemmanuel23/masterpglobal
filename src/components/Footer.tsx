import { Truck, MapPin, Phone, Mail, Bus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-4">
              <span className="text-3xl font-display font-black text-white tracking-tighter">
                MASTER P
              </span>
              <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                Global Investments Ltd
              </span>
              <span className="text-xs italic text-gray-400 mt-1">RC:9180224 | "On Christ We Stand!"</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Providing top-tier inter-state travel, cargo logistics, and secure transportation services across Nigeria. Relentless service, on-time delivery.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-brand-accent transition-colors">Track Trip/Cargo</Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-brand-accent transition-colors">Live Fleet Map</Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-brand-accent transition-colors">Book Travel/Freight</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-brand-accent shrink-0" />
                Jibowu Terminal, Lagos, Nigeria
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-brand-accent shrink-0" />
                +234 803 724 8249
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-brand-accent shrink-0" />
                info@masterpglobal.com.ng
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500 uppercase tracking-widest flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Bus className="w-4 h-4 mr-1 text-brand-accent" /> Travel</span>
            <span className="flex items-center"><Truck className="w-4 h-4 mr-1 text-brand-accent" /> Cargo</span>
          </div>
          <span>| &copy; {new Date().getFullYear()} Master P Global. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
