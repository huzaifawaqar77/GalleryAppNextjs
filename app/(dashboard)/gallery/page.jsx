import GalleryIcon from "./gallery.svg";
import Image from "next/image";
import GalleryComponent from "./galleryComponent";
const Gallery = () => {
  return (
    <div>
      <div className="flex gap-2 items-center ">
        <Image
          src={GalleryIcon}
          alt="home page"
          height={40}
          width={40}
          quality={100}
        />
        <h2>All Gallery</h2>
      </div>
      <div>
        <GalleryComponent />
      </div>
    </div>
  );
};

export default Gallery;
