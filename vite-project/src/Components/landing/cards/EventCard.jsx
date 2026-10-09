
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({ event }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Upcoming</span>
      </div>

      <p className="text-gray-600 mb-3">{event.organizer}</p>

      <div className="flex items-center text-sm text-gray-500 mb-3">
        <Calendar className="w-4 h-4 mr-1" />
        {new Date(event.date).toLocaleDateString()} • {event.time}
      </div>

      <div className="flex items-center text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        {event.location}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Register</button>
      </div>
    </div>
  </div>
);

export default EventCard;