import React from "react";

// Clerk Auth components
import HomeButton from "./HomeButton";
import { createClient } from "../../utils/supabase/server";
import AuthButton from "./ui/AuthButton";

async function AppHeader() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  return (
    <header className="p-4 sticky top-0 bg-default-secondary flex justify-between items-center shadow-default-gray shadow-md">
      <HomeButton />
      <AuthButton />
    </header>
  );
}

export default AppHeader;