import { ArrowRight, Globe, ShieldCheck, Clock, Users, PackageSearch, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { SiennaIcon } from "../components/SiennaIcon";

export default function Home() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?id=${trackingNumber}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-brand-navy overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-brand-accent blur-[120px]" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-blue blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse" />
                Nigeria's Premier Transport & Logistics
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-6">
                CONNECTING <br />
                <span className="text-brand-accent">NIGERIA.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
                Reliable inter-state travel for passengers and secure cargo logistics across the country. Travel in comfort, ship with confidence.
              </p>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl max-w-xl">
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <PackageSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Ticket or Waybill No. (e.g. MP-10294)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-brand-navy font-semibold focus:outline-none focus:ring-2 focus:ring-brand-accent"
                      required
                    />
                  </div>
                  <button 
                    type="submit"
                    className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors flex items-center justify-center whitespace-nowrap"
                  >
                    Track <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </form>
              </div>
            </div>
            
            <div className="hidden lg:block relative h-[500px]">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-blue/50 rounded-3xl border border-white/10 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
                 {/* Abstract grid back for digital feel */}
                 <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 mix-blend-overlay" />
                 
                 {/* Highway graphic */}
                 <div className="absolute bottom-[30%] w-[150%] h-[80px] bg-white/5 transform -rotate-12 border-y-2 border-dashed border-white/20" />
                 
                 {/* Digital Sienna Custom Vector */}
                 <div className="relative z-10 transform scale-125 translate-y-4 hover:scale-[1.35] hover:-translate-y-2 transition-transform duration-700 ease-out">
                    <SiennaIcon className="w-[350px] h-auto drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]" />
                 </div>

                 <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex justify-between items-center text-white z-20">
                   <div>
                     <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">Active Routes</p>
                     <p className="text-3xl font-display font-black">All 36 States</p>
                   </div>
                   <div className="w-px h-12 bg-white/20" />
                   <div>
                     <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">On-Time Rate</p>
                     <p className="text-3xl font-display font-black">99.8%</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-transparent relative z-20 -mt-8 rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-white" />}
              title="Inter-State Travel"
              description="Book comfortable, air-conditioned buses to any state in Nigeria safely."
              link="/book"
              linkText="Book Bus Ticket"
            />
            <FeatureCard 
              icon={<PackageSearch className="w-8 h-8 text-white" />}
              title="Cargo Logistics"
              description="Send goods swiftly and securely across the country. From small parcels to heavy freight."
              link="/book"
              linkText="Book Cargo"
            />
            <FeatureCard 
              icon={<MapPin className="w-8 h-8 text-white" />}
              title="Live Tracking"
              description="Monitor your goods or track your bus's location in real-time on the map."
              link="/fleet"
              linkText="View Live Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, link, linkText }: any) {
  return (
    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 group relative overflow-hidden shadow-sm">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
      <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-brand-accent transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-navy mb-3">{title}</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-accent uppercase tracking-wider transition-colors"
      >
        {linkText} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
