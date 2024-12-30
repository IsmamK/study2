import React from "react";
import Hero from "../components/home_components/Hero";
import FieldsList from "../components/home_components/FieldsList";
import PlayerFinder from "../components/home_components/PlayerFinder";
import BookingForm from "../components/home_components/BookingForm";
import GroupManager from "../components/home_components/GroupManager";

const Home = () => {
 

  return (
    <div className="min-h-screen bg-gray-50">
    <Hero />
    <FieldsList />
    <PlayerFinder />
    <GroupManager />
    <BookingForm />

  </div>
  );
};

export default Home;
