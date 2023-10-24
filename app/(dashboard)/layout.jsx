import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavBar from "../components/NavBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default DashboardLayout;
