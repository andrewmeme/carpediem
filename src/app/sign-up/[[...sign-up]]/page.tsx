import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="h-svh flex flex-col justify-center items-center">
      <div>
        <SignUp />
      </div>
    </section>
  );
}