import AppHeader from "@/components/AppHeader";
import Banner from "@/components/HomeBanner";
import React from "react";

export default function Home() {
  return (
    <>
    <div className="h-svh flex flex-col">
      <AppHeader />
      <Banner />
    </div>
    </> 
  );
}
