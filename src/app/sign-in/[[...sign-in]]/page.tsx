import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="h-svh flex flex-col justify-center items-center">
      <div>
        <SignIn />
      </div>
    </section>
  );
}