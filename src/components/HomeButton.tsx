import React from "react";
import Link from "next/link";

function HomeButton() {
  return (
    <Link 
      className="text-2xl" 
      href="/">
        Carpe Diem
    </Link>
  );
}

export default HomeButton;