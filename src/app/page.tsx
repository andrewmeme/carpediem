import AppHeader from "@/components/header/AppHeader";
import Button from "@/components/Button";
import React from "react";

function Banner() {
  return(
    <section className="p-4 h-full font-bold text-6xl md:text-7xl text-center flex flex-col justify-center">
      <div className="mb-8 space-y-2 md:space-y-4">
        <h1 className="text-default-black">
          Seize the Day with <span className="text-default-secondary">Carpe Diem</span>
        </h1>
        <h2 className="font-medium text-xl md:text-3xl">Make everyday meaningful with a time limited journal.</h2>
      </div>
      <div className="">
        <Button text="Start Now" href="/sign-up"/>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div className="h-svh">
      <AppHeader />
      <Banner />
    </div>
  );
}
