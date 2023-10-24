"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../authForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (e, email, password) => {
    e.preventDefault();

    //* supabase instance

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    //* condition checks

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <h2>Signup</h2>
        <AuthForm handleSubmit={handleSignup} />
        {error && <div className="error">{error}</div>}
      </div>
    </main>
  );
};

export default Signup;
