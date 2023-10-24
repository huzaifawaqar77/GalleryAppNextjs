import Link from "next/link";
import Logo from "./gallery.svg";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import SignOut from "../(auth)/signoutButton";

const NavBar = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <nav className="flex items-center gap-12 mb-16">
      <Image
        src={Logo}
        alt="gallery logo"
        height={60}
        width={60}
        quality={100}
      />
      <h2 className="text-primary">Picsor</h2>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/gallery"}>Gallery</Link>
      {session && <p className="ml-auto">Hello! {session.user.email}</p>}
      {session && <SignOut />}
    </nav>
  );
};

export default NavBar;
