import Button from "@/components/ui/Button";
import React from "react";

function DashBoard() {
  return (
    <section className="mt-8 flex items-center justify-center">
      <Button href="dashboard/post" text="New Entry"/>
    </section>
  );
}

export default DashBoard;