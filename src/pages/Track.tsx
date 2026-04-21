import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Search, MapPin, CheckCircle2, Clock, Truck, Package, UserCheck } from "lucide-react";
import { cn } from "../lib/utils";

// Mock data generator for tracking with Nigerian routing
const getMockTrackingData = (id: string) => {
  if (!id) return null;
  const isPassenger = id.toUpperCase().includes('BUS');
  
  const statuses = isPassenger ? ["BOOKED", "EN_ROUTE", "ARRIVING", "COMPLETED"] : ["SHIPPED", "IN_TRANSIT", "OUT_FOR_DELIVERY", "DELIVERED"];
  const randomStatus = statuses[id.length % 4];
  
  return {
    id: id.toUpperCase(),
    type: isPassenger ? 'Passenger Trip' : 'Cargo Waybill',
    status: randomStatus,
    origin: "Lagos (Jibowu)",
    destination: "Calabar (Marian)",
    estimatedDelivery: "2026-04-25",
    events: [
      { date: "2026-04-20 08:00 AM", location: "Lagos Terminal", description: isPassenger ? "Ticket confirmed & Passenger checked in" : "Cargo received and processed", completed: true },
      { date: "2026-04-20 10:30 AM", location: "Lagos-Ibadan Exp", description: "Departed origin terminal", completed: true },
      { date: "2026-04-21 02:15 PM", location: "Benin-Ore Expressway", description: "In transit", completed: randomStatus !== statuses[0] },
      { date: "Pending", location: "Odukpani Junction", description: "Approaching destination", completed: randomStatus === statuses[3] },
      { date: "Pending", location: "Calabar (Marian Road)", description: "Arrived / Delivered", completed: randomStatus === statuses[3] },
    ]
  };
};

export default function Track() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialId = searchParams.get("id") || "";
  const [trackingNumber, setTrackingNumber] = useState(initialId);
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialId) {
      handleSearch(initialId);
    }
  }, [initialId]);

  const handleSearch = (id: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setData(getMockTrackingData(id));
      setIsLoading(false);
    }, 800);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber) {
      setSearchParams({ id: trackingNumber });
    }
  };

  return (
    <div className="flex-1 bg-transparent py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-black text-brand-navy tracking-tight mb-4">Track Trip or Cargo</h1>
          <p className="text-gray-500">Enter your ticket number or waybill below to see real-time status.</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-2 rounded-2xl shadow-lg shadow-gray-200/50 mb-12 border border-gray-100 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ticket / Waybill Number"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-transparent font-bold text-lg focus:outline-none"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-colors disabled:opacity-70"
            >
              {isLoading ? "Searching..." : "Track"}
            </button>
          </form>
        </div>

        {/* Results */}
        {data && !isLoading && (
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/40 border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-brand-navy p-8 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <p className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-1">{data.type}</p>
                <h2 className="text-3xl font-display font-black tracking-tight">{data.id}</h2>
              </div>
              <div className="flex bg-white/10 rounded-full px-4 py-2 border border-white/10 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse mr-3" />
                <span className="font-bold uppercase tracking-wider text-sm">{data.status.replace(/_/g, ' ')}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-wider">Origin</span>
                  </div>
                  <p className="text-xl font-bold text-brand-navy">{data.origin}</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-xs font-bold uppercase tracking-wider">Destination</span>
                  </div>
                  <p className="text-xl font-bold text-brand-navy">{data.destination}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <h3 className="text-lg font-bold text-brand-navy mb-8">Journey History</h3>
                <div className="absolute left-[27px] top-12 bottom-0 w-0.5 bg-gray-100" />
                
                <div className="space-y-8 relative">
                  {data.events.map((event: any, idx: number) => (
                    <div key={idx} className={cn(
                      "flex gap-6",
                      !event.completed && "opacity-50"
                    )}>
                      <div className="relative z-10 flex flex-col items-center">
                        <div className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-sm",
                          event.completed ? "bg-brand-navy text-white" : "bg-gray-100 text-gray-400"
                        )}>
                          {idx === data.events.length - 1 ? <CheckCircle2 className="w-6 h-6" /> : 
                           idx === 0 ? (data.type === 'Cargo Waybill' ? <Package className="w-6 h-6" /> : <UserCheck className="w-6 h-6" />) : 
                           <Truck className="w-6 h-6" />}
                        </div>
                      </div>
                      
                      <div className="flex-1 pt-3 border-b border-gray-50 pb-8">
                        <h4 className="text-lg font-bold text-brand-navy">{event.description}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-1 gap-2 sm:gap-6">
                          <span className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {event.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
