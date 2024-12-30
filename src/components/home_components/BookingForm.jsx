import React, { useState } from "react";

const BookingForm = () => {
  const [isGroup, setIsGroup] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);
  const [field, setField] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [summaryVisible, setSummaryVisible] = useState(false);

  const handleAddMember = () => {
    setGroupMembers([...groupMembers, ""]);
  };

  const handleChangeMember = (index, value) => {
    const updatedMembers = [...groupMembers];
    updatedMembers[index] = value;
    setGroupMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSummaryVisible(true);
  };

  return (
    <section className="py-12 px-8 bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Book a Field</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Field Selection */}
          <div className="space-y-2">
            <label className="block text-gray-600 font-medium">Select Field</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={field}
              onChange={(e) => setField(e.target.value)}
              required
            >
              <option value="">Choose a field</option>
              <option value="Stadium A">Stadium A</option>
              <option value="Arena B">Arena B</option>
              <option value="Court C">Court C</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="space-y-2">
            <label className="block text-gray-600 font-medium">Choose Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <label className="block text-gray-600 font-medium">Choose Time</label>
            <input
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          {/* Booking Type Selection */}
          <div className="space-y-2">
            <label className="block text-gray-600 font-medium">Booking Type</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setIsGroup(e.target.value === "Group")}
              required
            >
              <option value="Solo">Solo</option>
              <option value="Group">Group</option>
            </select>
          </div>

          {/* Group Member Inputs */}
          {isGroup && (
            <div className="space-y-2">
              <label className="block text-gray-600 font-medium">Group Members</label>
              {groupMembers.map((member, index) => (
                <input
                  key={index}
                  type="text"
                  value={member}
                  onChange={(e) => handleChangeMember(index, e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Member ${index + 1}`}
                  required
                />
              ))}
              <button
                type="button"
                onClick={handleAddMember}
                className="text-blue-500 text-sm underline mt-2"
              >
                + Add Member
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Book Now
          </button>
        </form>

        {/* Booking Summary (Visible after submission) */}
        {summaryVisible && (
          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Booking Summary</h3>
            <p className="text-gray-700 mb-2"><strong>Field:</strong> {field}</p>
            <p className="text-gray-700 mb-2"><strong>Date:</strong> {date}</p>
            <p className="text-gray-700 mb-2"><strong>Time:</strong> {time}</p>
            <p className="text-gray-700 mb-2"><strong>Booking Type:</strong> {isGroup ? "Group" : "Solo"}</p>
            {isGroup && (
              <div>
                <strong>Group Members:</strong>
                <ul className="list-disc ml-6">
                  {groupMembers.map((member, index) => (
                    <li key={index} className="text-gray-700">{member}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-4 text-center">
              <button
                onClick={() => setSummaryVisible(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Clear Form
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingForm;
