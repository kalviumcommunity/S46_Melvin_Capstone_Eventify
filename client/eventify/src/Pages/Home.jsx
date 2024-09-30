import React, { useState } from 'react'
import { Bell, Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, image, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/event-details'); // Navigate to the detailed event page
  };

  return (
    <div onClick={handleClick} className="relative cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-white text-sm font-semibold">{title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-yellow-400 text-xs">★</span>
          <span className="text-white text-xs ml-1">{rating}</span>
        </div>
      </div>
    </div>
  );
};



const CampusEventsPlatform = () => {
  const [balance, setBalance] = useState(38.00);
  const [searchQuery, setSearchQuery] = useState('');

  const popularEvents = [
    { title: "Tech Fest 2024", image: "/api/placeholder/180/120", rating: 4.8 },
    { title: "Cultural Night", image: "/api/placeholder/180/120", rating: 4.7 },
    { title: "Debate Competition", image: "/api/placeholder/180/120", rating: 4.6 },
    { title: "Sports Meet", image: "/api/placeholder/180/120", rating: 4.5 },
    { title: "Hackathon", image: "/api/placeholder/180/120", rating: 4.9 },
    { title: "Art Exhibition", image: "/api/placeholder/180/120", rating: 4.7 },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">CampusEvents</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              className="bg-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Easy login by phone
          </button>
          <MapPin size={24} />
          <div className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-gray-800 p-4 h-screen">
          <div className="mb-6">
            <img src="/api/placeholder/48/48" alt="User" className="rounded-full w-12 h-12 mb-2" />
            <h2 className="font-semibold">John Doe</h2>
            <p className="text-sm text-gray-400">+1 234 567 8900</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <p className="text-sm mb-1">Balance</p>
            <p className="font-semibold text-xl">${balance.toFixed(2)}</p>
            <button className="mt-2 bg-blue-500 text-white rounded-full px-4 py-1 text-sm">
              Add funds
            </button>
          </div>
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Home</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">My Events</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Explore</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Notifications</a></li>
              <li><a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</a></li>
            </ul>
          </nav>
          <button className="mt-8 flex items-center text-red-500">
            <div size={18} className="mr-2" /> Log out
          </button>
        </aside>

        <main className="flex-1 p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Featured Event</h2>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src="/api/placeholder/800/300" alt="Featured Event" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Campus-wide Talent Show</h3>
                <p className="text-gray-400 mb-4">Showcase your talents and win amazing prizes!</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full">Register Now</button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Popular Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {popularEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CampusEventsPlatform;
