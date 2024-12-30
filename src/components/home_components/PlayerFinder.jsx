import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaUserAlt, FaLocationArrow, FaBasketballBall, FaFootballBall } from "react-icons/fa";

const PlayerFinder = () => {
  const location = useLocation();
  const isPlayersPage = location.pathname === "/players"; // Check the current path

  const players = [
    { id: 1, name: "John Doe", sports: ["Soccer", "Basketball"], skillLevel: "Intermediate", location: "Gulshan", image: "https://media.istockphoto.com/id/654106810/photo/man-playing-badminton.jpg?s=2048x2048&w=is&k=20&c=9MQ62uwmXv5dFLO8lcUXdPpY83Pi1Sq_HcplY2vhvVI=" },
    { id: 2, name: "Jane Smith", sports: ["Tennis", "Soccer"], skillLevel: "Advanced", location: "Banani", image: "https://media.istockphoto.com/id/1295916972/photo/soccer-is-my-life.webp?s=2048x2048&w=is&k=20&c=XUgAEbfsNR7LW5DO9BPdwIL0FgoEbd_bRJbB10LqYto=" },
    { id: 3, name: "Mike Brown", sports: ["Basketball", "Football"], skillLevel: "Beginner", location: "Mirpur", image: "https://img.freepik.com/free-photo/horizontal-portrait-basketball-player-dressed-casually-holds-ball_273609-8619.jpg?t=st=1733790233~exp=1733793833~hmac=0f367931bbc3120bb624645190fbf699816f2e085cb1488ab338135426b71e88&w=2000" },
    { id: 4, name: "Emily Davis", sports: ["Tennis", "Badminton"], skillLevel: "Expert", location: "Dhanmondi", image: "https://img.freepik.com/free-photo/handsome-guy-with-good-body-workout-morning-stadium-he-wears-sport-clothes-listening-music-through-headphones-doing-exercise_197531-975.jpg?t=st=1733790259~exp=1733793859~hmac=9f1dc32c06c543b9d4ebd0afa5a78c42a3df4fbefe4d16e129335a70260faa5d&w=2000" },
    { id: 5, name: "Chris Lee", sports: ["Soccer", "Football"], skillLevel: "Advanced", location: "Uttara", image: "https://img.freepik.com/free-photo/smiley-man-holding-racket-front-view_23-2149722497.jpg?t=st=1733790287~exp=1733793887~hmac=99bfd13ff269817ecb9d86a4591a97205a8f1961ba8a3e198f5c6e0c78571095&w=1060" },
    { id: 6, name: "Anna Williams", sports: ["Basketball", "Badminton"], skillLevel: "Intermediate", location: "Bashundhara", image: "https://img.freepik.com/premium-photo/portrait-cricket-player-field_53876-83022.jpg?w=2000" },
    { id: 7, name: "Liam Walker", sports: ["Tennis", "Soccer"], skillLevel: "Beginner", location: "Mohakhali", image: "https://img.freepik.com/free-photo/front-view-smiley-man-standing-court_23-2149523654.jpg?w=2000" },
    { id: 8, name: "Sophia Brown", sports: ["Badminton", "Basketball"], skillLevel: "Advanced", location: "Baridhara", image: "https://img.freepik.com/free-photo/athlete-carrying-sports-equipments_23-2148525571.jpg?w=2000" },
    { id: 9, name: "William Turner", sports: ["Soccer", "Tennis"], skillLevel: "Intermediate", location: "Malibagh", image: "https://img.freepik.com/free-photo/young-man-holding-tennis-racket-happy_23-2149614455.jpg?w=2000" },
    { id: 10, name: "Oliver White", sports: ["Football", "Soccer"], skillLevel: "Expert", location: "Old Dhaka", image: "https://img.freepik.com/free-photo/young-man-tennis-player-court_1303-16170.jpg?t=st=1733790311~exp=1733793911~hmac=d61c7796f67e49ce5a68a555846c92ed3abe88943aa52e95540d81497ba230a0&w=1060" },
    { id: 11, name: "Amelia Clark", sports: ["Badminton", "Basketball"], skillLevel: "Beginner", location: "Rampura", image: "https://img.freepik.com/free-photo/indoor-shot-young-athlete-standing-with-ball-isolated-white-wall-wearing-stylish-sportswear_231208-11893.jpg?w=2000" },
    { id: 12, name: "James Wilson", sports: ["Football", "Tennis"], skillLevel: "Intermediate", location: "Shahbagh", image: "https://img.freepik.com/free-photo/athletic-young-man-with-soccer-ball-field_23-2148525575.jpg?w=2000" },
    { id: 13, name: "Ava Garcia", sports: ["Basketball", "Soccer"], skillLevel: "Advanced", location: "Farmgate", image: "https://img.freepik.com/free-photo/handsome-smiling-guy-with-racket-standing-ready-hitting-ball_171337-5016.jpg?w=2000" },
    { id: 14, name: "Lucas Evans", sports: ["Soccer", "Tennis"], skillLevel: "Expert", location: "Banasree", image: "https://img.freepik.com/free-photo/soccer-player-doing-dynamic-action-isolated-white-background_155003-1877.jpg?w=2000" },
    { id: 15, name: "Isabella Martin", sports: ["Tennis", "Badminton"], skillLevel: "Intermediate", location: "Khilgaon", image: "https://img.freepik.com/free-photo/young-athlete-tennis-player-studio-shot_149155-109.jpg?w=2000" },
    { id: 16, name: "Henry Green", sports: ["Football", "Basketball"], skillLevel: "Beginner", location: "Mohammadpur", image: "https://img.freepik.com/free-photo/full-shot-young-man-standing-with-ball_23-2149680868.jpg?w=2000" },
    { id: 17, name: "Mia Scott", sports: ["Basketball", "Badminton"], skillLevel: "Advanced", location: "Tejgaon", image: "https://img.freepik.com/free-photo/young-girl-basketball-outfit-standing-with-ball-isolated_171337-1276.jpg?w=2000" },
    { id: 18, name: "Daniel Lewis", sports: ["Soccer", "Football"], skillLevel: "Intermediate", location: "Kawran Bazar", image: "https://img.freepik.com/free-photo/shot-young-handsome-man-standing-with-football-field_171337-5024.jpg?w=2000" },
    { id: 19, name: "Ella Harris", sports: ["Badminton", "Tennis"], skillLevel: "Expert", location: "Cantonment", image: "https://img.freepik.com/free-photo/young-girl-ready-play-tennis-racket-outdoor_171337-5379.jpg?w=2000" },
    { id: 20, name: "Ethan Robinson", sports: ["Basketball", "Soccer"], skillLevel: "Beginner", location: "Eskaton", image: "https://img.freepik.com/free-photo/smiley-guy-holding-basketball-standing-isolated-white-background_171337-1103.jpg?w=2000" },
  ];
  

  const [selectedSports, setSelectedSports] = useState([]);

  const handleSportFilterChange = (e) => {
    const value = e.target.value;
    setSelectedSports((prevSports) =>
      prevSports.includes(value)
        ? prevSports.filter((sport) => sport !== value)
        : [...prevSports, value]
    );
  };

  // Filter based on selected sports
  const filteredPlayers = players.filter((player) =>
    selectedSports.length > 0
      ? player.sports.some((sport) => selectedSports.includes(sport))
      : true
  );

  // Show only first 5 players on the Home page
  const playersToDisplay = isPlayersPage ? filteredPlayers : filteredPlayers.slice(0, 10);

  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Discover Players & Join Group Sports
      </h2>

      {/* Sport Filter */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Filter by Sport</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["Soccer", "Basketball", "Tennis", "Football", "Badminton"].map((sport) => (
            <label key={sport} className="flex items-center space-x-2 text-gray-700">
              <input
                type="checkbox"
                value={sport}
                onChange={handleSportFilterChange}
                className="checkbox checkbox-info"
              />
              <span>{sport}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {playersToDisplay.map((player) => (
          <div
            key={player.id}
            className="bg-white shadow-md rounded-lg p-4 transform hover:scale-105 transition duration-200 ease-in-out"
          >
            <div className="relative mb-4">
              <img
                src={player.image}
                alt={player.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 mx-auto"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-60 p-2 rounded-full shadow-lg">
                <FaUserAlt className="text-2xl text-blue-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">{player.name}</h3>
              <p className="text-gray-600 text-sm mt-1">
                <FaLocationArrow className="mr-2 text-blue-500" /> {player.location}
              </p>
              <div className="text-left text-sm mt-2">
                <p className="font-medium text-gray-700">Interested Sports:</p>
                <ul className="list-disc pl-6 text-gray-600">
                  {player.sports.map((sport, index) => (
                    <li key={index}>{sport}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center items-center text-sm mt-2">
                {player.sports.includes("Soccer") && (
                  <FaFootballBall className="mr-2 text-yellow-600" />
                )}
                {player.sports.includes("Basketball") && (
                  <FaBasketballBall className="mr-2 text-orange-600" />
                )}
                Skill Level: {player.skillLevel}
              </div>
              <button className="btn btn-primary w-full mt-4">
                Invite for Group Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Link to view all players */}
      {!isPlayersPage && (
        <div className="text-center mt-8">
          <a href="/players" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
            See All Players
          </a>
        </div>
      )}
    </section>
  );
};

export default PlayerFinder;
