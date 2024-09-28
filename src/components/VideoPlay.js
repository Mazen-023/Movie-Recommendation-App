import React from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";

const VideoPlay = ({ data, close, media_type }) => {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );

  return (
    <section className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-neutral-700 bg-opacity-50 dark:bg-neutral-800 flex justify-center items-center">
      <div className="bg-black dark:bg-gray-800 w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className=" absolute -right-1 -top-6 text-3xl z-50"
        >
          <IoClose />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
          className="w-full h-full"
          title="Something Went Wrong"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
