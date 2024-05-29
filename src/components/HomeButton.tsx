import React from "react";
import Link from "next/link";

function HomeButton() {
  return (
    <Link 
      className="text-2xl text-white" 
      href="/">
        Carpe Diem
    </Link>
  );
}

export default HomeButton;