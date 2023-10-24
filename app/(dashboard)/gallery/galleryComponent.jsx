//! Component: GalleryComponent
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const GalleryComponent = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.from("gallery").select();
  if (error) {
    console.log(error.message);
  }
  if (data) {
    console.log(data);
  }
  return (
    <main className="grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {data.map((image) => {
        return (
          <div key={image.id} className="my-10">
            {data && (
              <img
                src={image.url}
                alt="gallery image"
                className="w-full h-96 object-cover rounded-xl card"
              />
            )}
            {error && <div className="error">{error}</div>}
          </div>
        );
      })}
    </main>
  );
};

export default GalleryComponent;
