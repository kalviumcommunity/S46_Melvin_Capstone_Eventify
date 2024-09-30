import React from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share2 } from 'lucide-react';

const DetailedEventPage = () => {
  const event = {
    title: "Campus Tech Fest 2024",
    image: "/api/placeholder/1200/400",
    date: "April 15-17, 2024",
    location: "Main Campus Auditorium",
    attendees: 500,
    duration: "3 days",
    description: "Join us for the biggest tech event of the year! Campus Tech Fest 2024 brings together industry leaders, innovative startups, and tech enthusiasts for three days of cutting-edge presentations, workshops, and networking opportunities.",
    schedule: [
      { day: "Day 1", events: ["Opening Ceremony", "Keynote Speech", "AI Workshop"] },
      { day: "Day 2", events: ["Hackathon", "VR/AR Showcase", "Networking Lunch"] },
      { day: "Day 3", events: ["Startup Pitch Competition", "Closing Ceremony", "Awards"] },
    ],
    speakers: [
      { name: "Dr. Jane Smith", role: "AI Research Lead", image: "/api/placeholder/100/100" },
      { name: "John Doe", role: "Tech Entrepreneur", image: "/api/placeholder/100/100" },
      { name: "Sarah Johnson", role: "VR Innovation Director", image: "/api/placeholder/100/100" },
    ],
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <header className="bg-gray-800 p-4">
        <button className="flex items-center text-blue-400">
          <ArrowLeft size={24} className="mr-2" />
          Back to Events
        </button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
            <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Calendar size={20} className="mr-2 text-blue-400" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-blue-400" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users size={20} className="mr-2 text-blue-400" />
                <span>{event.attendees} Attendees</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2 text-blue-400" />
                <span>{event.duration}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About the Event</h2>
              <p className="text-gray-300">{event.description}</p>
            </section>

            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((day, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold text-blue-400">{day.day}</h3>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                      {day.events.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section className="bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Featured Speakers</h2>
              <div className="space-y-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-center">
                    <img src={speaker.image} alt={speaker.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <h3 className="font-semibold">{speaker.name}</h3>
                      <p className="text-sm text-gray-400">{speaker.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-blue-600 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Register Now</h2>
              <p className="mb-4">Secure your spot at this exciting event!</p>
              <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                Register
              </button>
            </section>

            <section className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Share Event</h2>
              <div className="flex justify-around">
                <button className="p-2 bg-blue-500 rounded-full">
                  <Share2 size={24} />
                </button>
                {/* Add more share buttons for other platforms */}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailedEventPage;