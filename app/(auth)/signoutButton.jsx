"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
const SignOut = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-primary px-4 py-2 rounded-md text-white font-bold"
    >
      Logout
    </button>
  );
};

export default SignOut;
