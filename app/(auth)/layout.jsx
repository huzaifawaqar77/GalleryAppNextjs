import Link from "next/link";
import Image from "next/image";
import Logo from "./gallery.svg";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav className="flex items-center gap-12 mb-16">
        <Image
          src={Logo}
          alt="gallery logo"
          height={60}
          width={60}
          quality={100}
        />
        <Link href={"/"}>
          <h2 className="text-primary">Picsor</h2>
        </Link>
        <Link href={"/login"}>Log in</Link>
        <Link href={"/signup"}>Sign up</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
