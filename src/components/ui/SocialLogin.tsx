'use client'
import { loginWithGoogle } from "@/app/login/actions";

function SocialLogin() {
  return <button onClick={(e) => {loginWithGoogle()}}>Google Login</button>
}

export default SocialLogin;