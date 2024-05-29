import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string,
  href: string,
}

function LoginButton({text="button", href}: ButtonProps ) {
  return (
    <Link
      className={"p-2 text-white bg-default-gray hover:bg-default-black rounded-lg font-medium shadow-md transition-colors "}
      href={href}
    >
      {text}
    </Link>
  );
}

export default LoginButton;