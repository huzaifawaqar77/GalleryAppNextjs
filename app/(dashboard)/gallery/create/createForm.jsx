"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CreateForm = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //! submit handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    const supabase = createClientComponentClient();

    const { data, error } = await supabase
      .from("gallery")
      .insert({ url })
      .select()
      .single();
    if (error) {
      setError(error.message);
      return;
    }
    if (data) {
      alert("image added successfully.");
      router.push("/gallery");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <label className="flex flex-col">
        <span className="font-semibold">Image Url:</span>
        <input
          className="border border-gray-300 rounded-md p-2 my-4"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <button className="bg-primary py-2 px-4 rounded-md text-white font-bold">
        Create
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateForm;
