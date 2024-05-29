import React from "react";

// Clerk Auth components
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import LoginButton from "../LoginButton";
import Link from "next/link";
import HomeButton from "./HomeButton";

function AppHeader() {

  return (
    <header className="p-4 border-default-gray flex justify-between items-center">
      
      <HomeButton />
      <nav>
        <SignedOut>
          <SignInButton>
            <LoginButton text="login" href="/sign-in"/>       
          </SignInButton>        
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
      
    </header>
  );
}

export default AppHeader;