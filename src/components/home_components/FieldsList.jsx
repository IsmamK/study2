import React, { useState, useEffect } from "react";
import { FaBasketballBall, FaFootballBall } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FieldsList = () => {
  

  const [fields, setFields] = useState([
    {
      id: 1,
      name: "Stadium A",
      sport: "Soccer",
      location: "Downtown",
      availableSlots: 5,
      rating: 4.5,
      minBookingSize: 2,
      pricePerHour: 50,
      imageUrl: "https://img.freepik.com/free-vector/gradient-football-field-background_23-2149013247.jpg",
      amenities: ["Restrooms", "Parking", "Locker Rooms"],
      reviews: 120,
    },
    {
      id: 2,
      name: "Arena B",
      sport: "Basketball",
      location: "Midtown",
      availableSlots: 3,
      rating: 4.7,
      minBookingSize: 3,
      pricePerHour: 60,
      imageUrl: "https://img.freepik.com/free-vector/cartoon-background-empty-basketball-court-interior-sports-arena-with-spotlights_1441-2594.jpg",
      amenities: ["Restrooms", "Seating", "Food Court"],
      reviews: 98,
    },
    {
      id: 3,
      name: "Court C",
      sport: "Tennis",
      location: "Uptown",
      availableSlots: 7,
      rating: 4.2,
      minBookingSize: 1,
      pricePerHour: 40,
      imageUrl: "https://img.freepik.com/free-photo/abstract-indoor-tennis-court_155003-15516.jpg",
      amenities: ["Restrooms", "Parking"],
      reviews: 85,
    },
    {
      id: 4,
      name: "Field D",
      sport: "Football",
      location: "Suburbs",
      availableSlots: 8,
      rating: 4.8,
      minBookingSize: 2,
      pricePerHour: 55,
      imageUrl: "https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60376.jpg",
      amenities: ["Restrooms", "Parking", "Concessions"],
      reviews: 102,
    },
    {
      id: 5,
      name: "Court E",
      sport: "Badminton",
      location: "Downtown",
      availableSlots: 6,
      rating: 4.6,
      minBookingSize: 1,
      pricePerHour: 30,
      imageUrl: "https://img.freepik.com/free-photo/badminton-concept-with-shuttlecock-racket_23-2149940859.jpg",
      amenities: ["Restrooms", "Seating"],
      reviews: 110,
    },
    {
      id: 6,
      name: "Stadium F",
      sport: "Cricket",
      location: "Southside",
      availableSlots: 4,
      rating: 4.4,
      minBookingSize: 11,
      pricePerHour: 100,
      imageUrl: "https://img.freepik.com/free-photo/cricket-ground_1340-23108.jpg",
      amenities: ["Restrooms", "Seating", "Cafeteria"],
      reviews: 75,
    },
    {
      id: 7,
      name: "Arena G",
      sport: "Volleyball",
      location: "Beachside",
      availableSlots: 2,
      rating: 4.3,
      minBookingSize: 4,
      pricePerHour: 45,
      imageUrl: "https://img.freepik.com/free-photo/volleyball-beach-court-sunny-day_23-2148780574.jpg",
      amenities: ["Restrooms", "Water Facility"],
      reviews: 63,
    },
    {
      id: 8,
      name: "Court H",
      sport: "Table Tennis",
      location: "Midtown",
      availableSlots: 3,
      rating: 4.5,
      minBookingSize: 1,
      pricePerHour: 20,
      imageUrl: "https://img.freepik.com/free-photo/table-tennis-table-background_23-2149093754.jpg",
      amenities: ["Restrooms", "Locker Rooms"],
      reviews: 90,
    },
    {
      id: 9,
      name: "Field I",
      sport: "Hockey",
      location: "Northern Hills",
      availableSlots: 5,
      rating: 4.1,
      minBookingSize: 6,
      pricePerHour: 80,
      imageUrl: "https://img.freepik.com/free-photo/empty-hockey-field-night-time_1417-1867.jpg",
      amenities: ["Restrooms", "Concessions", "Seating"],
      reviews: 50,
    },
    {
      id: 10,
      name: "Arena J",
      sport: "Squash",
      location: "City Center",
      availableSlots: 2,
      rating: 4.9,
      minBookingSize: 1,
      pricePerHour: 25,
      imageUrl: "https://img.freepik.com/free-photo/modern-squash-court-interior_1176-462.jpg",
      amenities: ["Restrooms", "Locker Rooms"],
      reviews: 150,
    },
    {
      id: 11,
      name: "Field K",
      sport: "Rugby",
      location: "Western Outskirts",
      availableSlots: 4,
      rating: 4.6,
      minBookingSize: 10,
      pricePerHour: 120,
      imageUrl: "https://img.freepik.com/free-photo/empty-rugby-field_23-2148942978.jpg",
      amenities: ["Restrooms", "Parking"],
      reviews: 88,
    },
    {
      id: 12,
      name: "Stadium L",
      sport: "Baseball",
      location: "Downtown",
      availableSlots: 3,
      rating: 4.5,
      minBookingSize: 9,
      pricePerHour: 75,
      imageUrl: "https://img.freepik.com/free-photo/empty-baseball-field-day-time_23-2148865543.jpg",
      amenities: ["Restrooms", "Concessions"],
      reviews: 130,
    },
    {
      id: 13,
      name: "Court M",
      sport: "Badminton",
      location: "Uptown",
      availableSlots: 5,
      rating: 4.3,
      minBookingSize: 1,
      pricePerHour: 35,
      imageUrl: "https://img.freepik.com/free-photo/empty-badminton-court_1340-2737.jpg",
      amenities: ["Restrooms", "Seating"],
      reviews: 115,
    },
    {
      id: 14,
      name: "Arena N",
      sport: "Skating",
      location: "City Center",
      availableSlots: 6,
      rating: 4.7,
      minBookingSize: 2,
      pricePerHour: 60,
      imageUrl: "https://img.freepik.com/free-photo/empty-ice-skating-rink_23-2148768427.jpg",
      amenities: ["Restrooms", "Locker Rooms", "Seating"],
      reviews: 200,
    },
    {
      id: 15,
      name: "Field O",
      sport: "Archery",
      location: "Northern Hills",
      availableSlots: 4,
      rating: 4.8,
      minBookingSize: 1,
      pricePerHour: 50,
      imageUrl: "https://img.freepik.com/free-photo/archery-target-field_23-2148835243.jpg",
      amenities: ["Restrooms", "Seating"],
      reviews: 85,
    },
  ])
  

  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Check if the current page is /fields
    setShowAll(window.location.pathname === "/fields");
  }, []);

  const handleShowAll = () => {
    navigate("/fields"); // Navigate to /fields
    setShowAll(true); // Show all fields when on the page
  };

  const renderSportIcon = (sport) => {
    switch (sport) {
      case "Soccer":
        return <FaFootballBall />;
      case "Basketball":
        return <FaBasketballBall />;
      default:
        return null;
    }
  };

  const displayedFields = showAll ? fields : fields.slice(0, 5);

  return (
    <section className="py-12 px-8 bg-gradient-to-r from-blue-100 to-purple-200">
      <h2 className="text-3xl font-semibold text-gray-800">Explore Available Fields</h2>

      {/* Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {displayedFields.map((field) => (
          <div
            key={field.id}
            className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
              <img
                src={field.imageUrl}
                alt={field.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-blue-600">{field.name}</h3>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-gray-600 font-medium">
                {renderSportIcon(field.sport)} {field.sport}
              </span>
              <span className="text-sm text-gray-500">|</span>
              <span className="text-gray-600">{field.location}</span>
            </div>
            <p className="text-gray-600 mt-2">Price: ${field.pricePerHour}/hour</p>
            <p className="text-gray-600 mt-2">Available Slots: {field.availableSlots}</p>
          </div>
        ))}
      </div>

      {/* See All Button */}
      {!showAll && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowAll}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
          >
            See All Fields
          </button>
        </div>
      )}
    </section>
  );
};

export default FieldsList;
