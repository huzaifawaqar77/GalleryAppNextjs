import Image from "next/image";
import HomeIcon from "./home.svg";
import Link from "next/link";

const Home = async () => {
  return (
    <main className="flex flex-col">
      <div className="flex gap-2 items-center ">
        <Image
          src={HomeIcon}
          alt="home page"
          height={40}
          width={40}
          quality={100}
        />
        <h1>Home</h1>
        <button className="ml-auto bg-primary max-w-fit self-center py-2 px-4 rounded-md text-white font-bold my-10">
          <Link href={"/gallery/create"}>Create Image</Link>
        </button>
      </div>
      <button className="bg-primary max-w-fit self-center py-2 px-4 rounded-md text-white font-bold my-10">
        <Link href={"/gallery"}>Explore Gallery</Link>
      </button>
      <p className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus
        pellentesque eu tincidunt. Eget felis eget nunc lobortis. Faucibus nisl
        tincidunt eget nullam. Sagittis purus sit amet volutpat consequat mauris
        nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
        Ultrices in iaculis nunc sed. Eget felis eget nunc lobortis mattis
        aliquam faucibus purus. Tincidunt eget nullam non nisi est. Euismod
        lacinia at quis risus. Velit laoreet id donec ultrices tincidunt arcu
        non sodales. Lacinia quis vel eros donec ac odio tempor orci. Lacus vel
        facilisis volutpat est velit egestas dui id ornare. Mattis vulputate
        enim nulla aliquet porttitor lacus. Etiam tempor orci eu lobortis
        elementum nibh tellus molestie nunc.
      </p>
      <p className="card">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus
        pellentesque eu tincidunt. Eget felis eget nunc lobortis. Faucibus nisl
        tincidunt eget nullam. Sagittis purus sit amet volutpat consequat mauris
        nunc congue nisi. Maecenas pharetra convallis posuere morbi leo.
        Ultrices in iaculis nunc sed. Eget felis eget nunc lobortis mattis
        aliquam faucibus purus. Tincidunt eget nullam non nisi est. Euismod
        lacinia at quis risus. Velit laoreet id donec ultrices tincidunt arcu
        non sodales. Lacinia quis vel eros donec ac odio tempor orci. Lacus vel
        facilisis volutpat est velit egestas dui id ornare. Mattis vulputate
        enim nulla aliquet porttitor lacus. Etiam tempor orci eu lobortis
        elementum nibh tellus molestie nunc.
      </p>
    </main>
  );
};

export default Home;
