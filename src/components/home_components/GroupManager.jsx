import React, { useState } from "react";

const GroupManager = () => {
  const [groupName, setGroupName] = useState("");
  const [groupMembers, setGroupMembers] = useState([""]);
  const [status, setStatus] = useState("Waiting for more players...");
  const [isReady, setIsReady] = useState(false);

  // Handle adding new members to the group
  const handleAddMember = () => {
    setGroupMembers([...groupMembers, ""]);
  };

  // Handle member name changes
  const handleMemberChange = (index, value) => {
    const updatedMembers = [...groupMembers];
    updatedMembers[index] = value;
    setGroupMembers(updatedMembers);
  };

  // Handle status updates for the group
  const handleGroupStatusChange = (newStatus) => {
    setStatus(newStatus);
    if (newStatus === "Group Ready") setIsReady(true);
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 h-screen">
      <div className="max-w-4xl mx-auto rounded-lg shadow-xl bg-white p-8 space-y-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          Create and Manage Your Group
        </h2>
        
        <form className="space-y-6">
          {/* Group Name Section */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Group Name</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a cool group name"
            />
          </div>

          {/* Group Members Section */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Add Group Members</label>
            {groupMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-4">
                <input
                  type="text"
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={`Member ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMember}
              className="text-blue-500 font-semibold text-sm underline hover:text-blue-600"
            >
              + Add Another Member
            </button>
          </div>

          {/* Group Status Section */}
          <div className="flex space-x-6 mt-4">
            <button
              type="button"
              onClick={() => handleGroupStatusChange("Waiting for more players...")}
              className="w-1/2 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 font-semibold"
            >
              Waiting for Players
            </button>
            <button
              type="button"
              onClick={() => handleGroupStatusChange("Group Ready")}
              className="w-1/2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 font-semibold"
            >
              Group Ready
            </button>
          </div>

          {/* Status Display */}
          <p className="mt-4 text-lg text-gray-600 text-center">
            <strong>Status:</strong> {status}
          </p>

          {/* Book Field Button */}
          {isReady && (
            <div className="mt-6 text-center">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 font-semibold w-full">
                Book Field for Your Group
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default GroupManager;
