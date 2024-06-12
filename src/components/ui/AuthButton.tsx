import { signout } from "@/app/login/actions";
import { createClient } from "../../../utils/supabase/server";
import Link from "next/link";

async function AuthButton() {
  const supabase = createClient();
  const {data:{user}} = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="flex items-center gap-4">
      Hey, {user.user_metadata.full_name}
      <form action={signout}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
    );
  } else {
    return <Link href="/login">Sign in</Link>
  }
  
}

export default AuthButton;