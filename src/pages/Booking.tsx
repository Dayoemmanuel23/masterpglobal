import { useForm } from "react-hook-form";
import { useState } from "react";
import { PackageOpen, MapPin, Calendar, CheckCircle2, UserCheck, Plane } from "lucide-react";
import { cn } from "../lib/utils";

const NIGERIAN_STATES = ["Lagos", "Abuja (FCT)", "Rivers", "Kano", "Cross River", "Enugu", "Delta", "Oyo", "Kaduna", "Edo", "Ogun", "Anambra"];

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [bookingType, setBookingType] = useState('passenger');

  const onSubmit = (data: any) => {
    // Simulate API submission
    setTimeout(() => {
      setBookingId((bookingType === 'passenger' ? "BUS-" : "MP-") + Math.floor(Math.random() * 100000));
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 bg-transparent">
        <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50 max-w-lg w-full text-center border border-gray-100">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-display font-black text-brand-navy mb-4">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Your {bookingType === 'passenger' ? 'bus ticket' : 'cargo pickup'} has been scheduled successfully. You will receive an email shortly with details.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">Tracking ID</p>
            <p className="text-4xl font-black font-display text-brand-navy tracking-tight">{bookingId}</p>
          </div>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 rounded-xl font-bold uppercase tracking-wider border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-display font-black text-brand-navy tracking-tight mb-6">Book Travel/Freight.</h1>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed max-w-md">
              Fast, secure, and reliable. Book your seat for inter-state travel or schedule cargo logistics anywhere in Nigeria.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mr-6 shrink-0">
                  <UserCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg mb-1">Comfortable Terminals</h3>
                  <p className="text-sm text-gray-500">Air-conditioned terminals across 36 states.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mr-6 shrink-0">
                  <PackageOpen className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg mb-1">Nationwide Cargo</h3>
                  <p className="text-sm text-gray-500">From parcels to heavy equipment, delivered fast.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex bg-gray-200/50 p-1.5 rounded-xl mb-8 max-w-md">
              <button 
                type="button" 
                onClick={() => setBookingType('passenger')} 
                className={cn("flex-1 py-3 rounded-lg font-bold text-sm tracking-wide transition-all", bookingType === 'passenger' ? "bg-white text-brand-navy shadow hover:shadow-md" : "text-gray-500 hover:text-brand-navy")}
              >
                Book Bus Ticket
              </button>
              <button 
                type="button" 
                onClick={() => setBookingType('cargo')} 
                className={cn("flex-1 py-3 rounded-lg font-bold text-sm tracking-wide transition-all", bookingType === 'cargo' ? "bg-white text-brand-navy shadow hover:shadow-md" : "text-gray-500 hover:text-brand-navy")}
              >
                Book Cargo
              </button>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                
                {/* 1. Routes */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent border-b border-gray-100 pb-2 mb-6">1. Route Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">From (Origin)</label>
                      <div className="relative">
                        <select 
                          {...register("pickup", { required: true })}
                          className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors appearance-none"
                        >
                          <option value="">Select State</option>
                          {NIGERIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">To (Destination)</label>
                      <div className="relative">
                        <select 
                          {...register("destination", { required: true })}
                          className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors appearance-none"
                        >
                          <option value="">Select State</option>
                          {NIGERIAN_STATES.map(s => <option key={`to-${s}`} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Details */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent border-b border-gray-100 pb-2 mb-6">
                    2. {bookingType === 'passenger' ? 'Travel Specs' : 'Cargo Specs'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {bookingType === 'passenger' ? (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Passengers</label>
                        <input 
                          type="number"
                          {...register("passengers", { required: bookingType === 'passenger' })}
                          className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors"
                          placeholder="e.g. 1"
                          min="1"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Cargo Type</label>
                        <div className="relative">
                          <select 
                            {...register("cargoType")}
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors appearance-none"
                          >
                            <option>Standard Freight</option>
                            <option>Express Delivery</option>
                            <option>Oversized/Heavy</option>
                            <option>Agricultural</option>
                          </select>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      {bookingType === 'cargo' && (
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Weight (kg)</label>
                          <input 
                            type="number"
                            {...register("weight", { required: bookingType === 'cargo' })}
                            className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors"
                            placeholder="e.g. 50"
                          />
                        </div>
                      )}
                      <div className={cn(bookingType === 'passenger' ? "col-span-2" : "")}>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Travel Date</label>
                        <input 
                          type="date"
                          {...register("date", { required: true })}
                          className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Contact */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent border-b border-gray-100 pb-2 mb-6">3. Contact Info</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                      <input 
                        {...register("name", { required: true })}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email</label>
                      <input 
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-navy focus:bg-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-brand-navy hover:bg-brand-navy-light text-white p-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
