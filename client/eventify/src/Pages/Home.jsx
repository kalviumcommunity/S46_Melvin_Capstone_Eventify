import React from 'react';
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
  const popularEvents = [
    { title: "Tech Fest 2024", image: "/api/placeholder/180/120", rating: 4.8 },
    { title: "Cultural Night", image: "/api/placeholder/180/120", rating: 4.7 },
    { title: "Debate Competition", image: "/api/placeholder/180/120", rating: 4.6 },
    { title: "Sports Meet", image: "/api/placeholder/180/120", rating: 4.5 },
    { title: "Hackathon", image: "/api/placeholder/180/120", rating: 4.9 },
    { title: "Art Exhibition", image: "/api/placeholder/180/120", rating: 4.7 },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-400">CampusEvents</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Type to Search..."
              className="bg-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
            Easy login by phone
          </button>
          <MapPin size={24} className="text-gray-300" />
          <Bell size={24} className="text-gray-300" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      <div className="flex p-6 space-x-6">
        <aside className="w-64">
          <div className="bg-blue-500 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/48/48" alt="User" className="rounded-full w-12 h-12 mr-3" />
              <div>
                <h2 className="font-semibold">Adenzohrabiyan</h2>
                <p className="text-sm text-blue-200">+98 912 067 1263</p>
              </div>
            </div>
            <p className="text-sm mb-1">Balance</p>
            <p className="font-semibold text-xl">$38,00</p>
            <button className="mt-2 bg-white text-blue-500 rounded-full px-4 py-1 text-sm font-semibold">
              +
            </button>
          </div>
          <nav>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-3 text-white">
                <div className="w-1 h-6 bg-blue-500 rounded-r-full"></div>
                <span>Home</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1 h-6 bg-transparent"></div>
                <span>Favorite</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1 h-6 bg-transparent"></div>
                <span>Bonuses</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1 h-6 bg-transparent"></div>
                <span>Purchases</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-1 h-6 bg-transparent"></div>
                <span>Reminder</span>
              </li>
            </ul>
          </nav>
          <button className="mt-8 text-gray-400 text-sm">
            Settings
          </button>
          <button className="mt-4 text-gray-400 text-sm">
            log out
          </button>
        </aside>

        <main className="flex-1">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-8 relative overflow-hidden">
            <img src="/api/placeholder/800/300" alt="Featured Event" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Campus Tech Fest</h2>
              <p className="text-xl mb-4">Do you want to be reminded?</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
                Remind me
              </button>
              <div className="mt-4 flex space-x-4 text-2xl font-bold">
                <div>
                  <span className="text-4xl">04</span>
                  <span className="text-sm block">DAYS</span>
                </div>
                <div>
                  <span className="text-4xl">00</span>
                  <span className="text-sm block">HOURS</span>
                </div>
                <div>
                  <span className="text-4xl">00</span>
                  <span className="text-sm block">MINUTES</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Popular Events</h2>
            <a href="#" className="text-blue-400 text-sm">See All</a>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {popularEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Category</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
                Tech Events
              </button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-full">
                Cultural Events
              </button>
              <button className="bg-gray-700 text-white px-6 py-2 rounded-full">
                Sports
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CampusEventsPlatform;