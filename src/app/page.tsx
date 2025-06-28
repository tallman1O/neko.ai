import React from "react";
import { ModeToggle } from "../components/ModeToggle";

const Home = () => {
  return (
    <div className="bg-white dark:bg-black">
      Home
      <ModeToggle />
    </div>
  );
};

export default Home;
