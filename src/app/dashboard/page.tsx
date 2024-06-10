import AppHeader from "@/components/AppHeader";
import Button from "@/components/ui/Button";
import React, { useState, useEffect } from "react";
import Entries from "@/components/posts/Entries";

function DashBoard() {
  return (
    <div>
      <AppHeader/>
      <section className="mt-8 flex items-center justify-center">
        <Button href="dashboard/post" text="New Entry"/>
      </section>
      <section className="mt-8 px-4">
        <Entries />
      </section>
    </div>
  );
}

export default DashBoard;