import AppHeader from "@/components/AppHeader";
import Button from "@/components/ui/Button";
import React from "react";

function DashBoard() {
  return (
    <div>
      <AppHeader/>
      <section className="mt-8 flex items-center justify-center">
        <Button href="dashboard/post" text="New Entry"/>
      </section>
    </div>
    
  );
}

export default DashBoard;