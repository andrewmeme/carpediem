"use-client"

import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string,
  href: string,
}

function Button({text="button", href}: ButtonProps ) {
  return (
    <Link
      className={"p-2 bg-default-primary hover:bg-default-secondary rounded-lg text-lg md:text-xl font-medium shadow-md transition-colors "}
      href={href}
    >
      {text}
    </Link>
  );
}

export default Button;