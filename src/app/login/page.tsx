import { login, signup, loginWithGoogle } from "./actions"

export default function LoginPage() {
  return (
    <div className="w-svw h-svh flex items-center justify-center">
      <form className="w-[30vw] flex flex-col space-y-4">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
        <button formAction={loginWithGoogle}>Google Login</button>
      </form>
    </div>
  )
}