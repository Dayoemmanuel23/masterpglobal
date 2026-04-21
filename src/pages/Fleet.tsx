import { useState, useMemo } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Truck, Bus, Navigation } from 'lucide-react';
import { cn } from '../lib/utils';

// Mock fleet data centralized around Nigeria
const INITIAL_FLEET = Array.from({ length: 15 }).map((_, i) => {
  const isBus = i % 2 === 0;
  return {
    id: isBus ? `BUS-${2000 + i}` : `TRK-${1000 + i}`,
    type: isBus ? 'Passenger Bus' : 'Cargo Truck',
    latitude: 9.0579 + (Math.random() - 0.5) * 5, // Around center of Nigeria
    longitude: 7.4951 + (Math.random() - 0.5) * 5, 
    status: Math.random() > 0.2 ? 'moving' : 'idle',
    heading: Math.random() * 360,
    speed: Math.floor(Math.random() * 65),
    route: isBus ? "Lagos to Calabar" : "Kano to Port Harcourt",
    driver: `Driver ${i + 1}`
  };
});

export default function Fleet() {
  const [fleet] = useState(INITIAL_FLEET);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  // Using completely free Carto basemap which requires no API key
  const mapStyle = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-80px)] relative">
      {/* Overlay UI */}
      <div className="absolute top-6 left-6 z-10 w-80">
        <div className="bg-brand-navy/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 p-6 text-white">
          <h2 className="text-2xl font-display font-black tracking-tight mb-2">Live Fleet Control</h2>
          <p className="text-gray-400 text-sm mb-6">Nigeria real-time tracking system.</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-3xl font-bold text-brand-accent">{fleet.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">Total Assets</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 border border-white/5">
              <p className="text-3xl font-bold text-green-400">
                {fleet.filter(f => f.status === 'moving').length}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1">Active Now</p>
            </div>
          </div>
          
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {fleet.map(vehicle => (
              <div 
                key={vehicle.id}
                onClick={() => setSelectedVehicle(vehicle)}
                className={cn(
                  "flex items-center p-3 rounded-lg border cursor-pointer transition-colors",
                  selectedVehicle?.id === vehicle.id 
                    ? "bg-brand-accent/20 border-brand-accent/50" 
                    : "bg-white/5 border-transparent hover:bg-white/10"
                )}
              >
                <div className={cn(
                  "w-2 h-2 rounded-full mr-3 shadow-[0_0_8px] shrink-0",
                  vehicle.status === 'moving' ? "bg-green-400 shadow-green-400" : "bg-amber-400 shadow-amber-400"
                )} />
                <div className="flex-1 mb-1">
                  <div className="flex items-center gap-2">
                    {vehicle.type === "Passenger Bus" ? <Bus className="w-3 h-3 text-brand-blue" /> : <Truck className="w-3 h-3 text-brand-accent" />}
                    <p className="font-bold text-sm truncate">{vehicle.id}</p>
                  </div>
                  <p className="text-xs text-gray-400">{vehicle.status === 'moving' ? `${vehicle.speed} km/h` : 'Idle'}</p>
                </div>
                <Navigation className="w-4 h-4 text-gray-500 shrink-0" style={{ transform: `rotate(${vehicle.heading}deg)` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Map
        initialViewState={{
          longitude: 8.6753, // Longitude of Nigeria center
          latitude: 9.0820,  // Latitude of Nigeria center
          zoom: 5.5
        }}
        mapStyle={mapStyle}
        style={{ width: '100%', height: '100%' }}
      >
        {fleet.map((vehicle) => (
          <Marker
            key={vehicle.id}
            longitude={vehicle.longitude}
            latitude={vehicle.latitude}
            anchor="center"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setSelectedVehicle(vehicle);
            }}
          >
            <div 
              className={cn(
                "relative group cursor-pointer transition-transform",
                selectedVehicle?.id === vehicle.id ? "scale-125 z-10" : "hover:scale-110"
              )}
            >
              <div className="absolute inset-0 bg-brand-accent blur-md opacity-40 rounded-full group-hover:opacity-100" />
              <div className={cn(
                "relative border-2 border-brand-accent w-8 h-8 rounded-full flex items-center justify-center text-white",
                vehicle.type === 'Passenger Bus' ? 'bg-brand-blue' : 'bg-brand-navy'
              )}>
                {vehicle.type === 'Passenger Bus' ? <Bus className="w-4 h-4" /> : <Truck className="w-4 h-4" />}
              </div>
            </div>
          </Marker>
        ))}

        {selectedVehicle && (
          <Popup
            anchor="bottom"
            longitude={selectedVehicle.longitude}
            latitude={selectedVehicle.latitude}
            onClose={() => setSelectedVehicle(null)}
            closeButton={false}
            className="fleet-popup"
            offset={20}
          >
            <div className="p-3">
              <div className="font-bold text-lg border-b pb-2 mb-2">{selectedVehicle.id} <span className="text-xs font-normal text-gray-500 block">{selectedVehicle.type}</span></div>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500 font-medium">Driver:</span> {selectedVehicle.driver}</p>
                <p><span className="text-gray-500 font-medium">Route:</span> {selectedVehicle.route}</p>
                <p><span className="text-gray-500 font-medium">Status:</span> 
                  <span className={selectedVehicle.status === 'moving' ? "text-green-600 font-bold ml-1" : "text-amber-600 font-bold ml-1"}>
                    {selectedVehicle.status.toUpperCase()}
                  </span>
                </p>
                {selectedVehicle.status === 'moving' && (
                  <p><span className="text-gray-500 font-medium">Speed:</span> {selectedVehicle.speed} km/h</p>
                )}
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
