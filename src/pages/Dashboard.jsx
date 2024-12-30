import React, { useState } from "react";
import { FaUserAlt, FaCalendarAlt, FaUsers, FaArrowRight, FaArrowLeft, FaPencilAlt, FaTimesCircle } from "react-icons/fa";

const Dashboard = () => {
  const [sentInvites, setSentInvites] = useState([
    { id: 1, name: "John Doe", sport: "Basketball", status: "Pending" },
    { id: 2, name: "Jane Smith", sport: "Soccer", status: "Cancelled" },
  ]);

  const [receivedInvites, setReceivedInvites] = useState([
    { id: 1, name: "Alex Brown", sport: "Tennis", status: "Pending" },
    { id: 2, name: "Chris Green", sport: "Football", status: "Accepted" },
  ]);

  const [connectedPlayers, setConnectedPlayers] = useState([
    { id: 1, name: "Michael Jordan", sport: "Basketball" },
    { id: 2, name: "Cristiano Ronaldo", sport: "Soccer" },
  ]);

  const [bookings, setBookings] = useState([
    { id: 1, field: "Stadium A", date: "2024-12-15", time: "10:00 AM", status: "Confirmed" },
    { id: 2, field: "Court B", date: "2024-12-20", time: "2:00 PM", status: "Pending" },
    { id: 3, field: "Arena C", date: "2024-12-25", time: "4:00 PM", status: "Canceled" },
  ]);

  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "@john_doe",
    bio: "Basketball enthusiast, Soccer lover.",
    sportInterests: ["Basketball", "Soccer", "Tennis"],
    profilePic: "https://www.example.com/profile-pic.jpg",
  });

  // Handle invitation actions
  const handleSentInviteAction = (id, action) => {
    if (action === "cancel") {
      setSentInvites((prev) =>
        prev.filter((invite) => invite.id !== id)
      );
    }
  };

  const handleReceivedInviteAction = (id, action) => {
    setReceivedInvites((prev) =>
      prev.map((invite) =>
        invite.id === id
          ? { ...invite, status: action === "accept" ? "Accepted" : "Declined" }
          : invite
      )
    );
  };

  const handleBookingAction = (id, action) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? { ...booking, status: action === "cancel" ? "Canceled" : booking.status }
          : booking
      )
    );
  };

  // Handle profile editing
  const handleProfileEdit = (newProfile) => {
    setProfile(newProfile);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-5xl font-semibold text-center text-white mb-12">Welcome to Your Dashboard</h1>

      {/* Profile Section */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-8 mb-12 flex flex-col items-center text-center space-y-4">
        <img src={profile.profilePic} alt="Profile" className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg" />
        <h2 className="text-3xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-xl text-gray-600">{profile.username}</p>
        <p className="text-lg text-gray-700">{profile.bio}</p>
        <div className="flex space-x-2 mt-4">
          {profile.sportInterests.map((sport, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{sport}</span>
          ))}
        </div>
        {/* Edit Profile Button */}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => handleProfileEdit({ ...profile, bio: "Updated Bio!" })}
        >
          <FaPencilAlt className="inline-block mr-2" /> Edit Profile
        </button>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
   {/* My Bookings */}
   <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col space-y-4 col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Bookings</h3>
          {bookings.length === 0 ? (
            <p className="text-gray-500">No bookings yet.</p>
          ) : (
            bookings.map((booking) => (
              <div key={booking.id} className="border-b pb-4">
                <p className="text-gray-700">
                  <strong>{booking.field}</strong> - {booking.date} at {booking.time}
                </p>
                <p className={`text-sm ${booking.status === 'Confirmed' ? 'text-green-500' : 'text-red-500'}`}>
                  Status: {booking.status}
                </p>
                {booking.status === 'Pending' && (
                  <div className="mt-2">
                    <button
                      onClick={() => handleBookingAction(booking.id, "cancel")}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        {/* Sent Invitations */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Invitations Sent</h3>
          {sentInvites.length === 0 ? (
            <p className="text-gray-500">No invitations sent.</p>
          ) : (
            sentInvites.map((invite) => (
              <div key={invite.id} className="border-b pb-4">
                <p className="text-gray-700"><strong>{invite.name}</strong> - {invite.sport}</p>
                <p className={`text-sm ${invite.status === 'Accepted' ? 'text-green-500' : 'text-yellow-500'}`}>
                  Status: {invite.status}
                </p>
                {invite.status === 'Pending' && (
                  <button
                    onClick={() => handleSentInviteAction(invite.id, "cancel")}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
                  >
                    Cancel Invitation
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        {/* Received Invitations */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Invitations Received</h3>
          {receivedInvites.length === 0 ? (
            <p className="text-gray-500">No invitations received.</p>
          ) : (
            receivedInvites.map((invite) => (
              <div key={invite.id} className="border-b pb-4">
                <p className="text-gray-700"><strong>{invite.name}</strong> - {invite.sport}</p>
                <p className={`text-sm ${invite.status === 'Accepted' ? 'text-green-500' : 'text-yellow-500'}`}>
                  Status: {invite.status}
                </p>
                {invite.status === 'Pending' && (
                  <div className="flex space-x-2 mt-2">
                    <button
                      onClick={() => handleReceivedInviteAction(invite.id, "accept")}
                      className="bg-green-500 text-white px-4 py-2 rounded-md"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReceivedInviteAction(invite.id, "decline")}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Connected Players */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col space-y-4 col-span-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connected Players</h3>
          {connectedPlayers.length === 0 ? (
            <p className="text-gray-500">No connected players yet.</p>
          ) : (
            <div className="grid grid-cols-3">
            {connectedPlayers.map((player) => (
              <div key={player.id} className="border p-4">
                <p className="text-gray-700"><strong>{player.name}</strong> - {player.sport}</p>
              </div>
            ))}
            </div>
          )}
        </div>

     
      </div>
    </section>
  );
};

export default Dashboard;
