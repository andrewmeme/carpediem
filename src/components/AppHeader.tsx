import React from "react";

// Clerk Auth components
import HomeButton from "./HomeButton";

function AppHeader() {

  return (
    <header className="p-4 sticky top-0 bg-default-secondary flex justify-between items-center shadow-default-gray shadow-md">
      <HomeButton />
    </header>
  );
}

export default AppHeader;