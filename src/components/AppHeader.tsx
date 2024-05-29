import React from "react";

// Clerk Auth components
import HomeButton from "./HomeButton";

function AppHeader() {

  return (
    <header className="p-4 border-default-gray flex justify-between items-center">
      
      <HomeButton />
      <nav>
      </nav>
      
    </header>
  );
}

export default AppHeader;