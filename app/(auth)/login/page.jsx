"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../authForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleLogin = async (e, email, password) => {
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    }
    if (!error) {
      setError(null);
      router.push("/");
    }
  };
  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h2>Login</h2>
        <AuthForm handleSubmit={handleLogin} />
        {error && <div className="error">{error}</div>}
      </div>
    </main>
  );
};

export default Login;
