import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartUpIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";

const Post = ({ post }) => {
  return (
    <>
      <div className="w-full max-w-[700px] shadow-xl p-2 rounded-md mb-4 border">
        <p className="text-right text-blue-500 text-xs">2m ago</p>
        {post?.image && (
          <div className="relative w-full h-[200px]">
            <Image src="/file.webp" alt="Picture" fill={true} />
          </div>
        )}

        <div className="flex space-x-2 px-3 pt-2 w-full">
          <div className="userLogo">
            <Image src="/user1.png" alt="user" fill={true} />
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-2 md:space-x-4 pt-2">
              <h1 className="text-sm md:text-base font-medium">{post?.name}</h1>
              <button className="bg-blue-800 btns">Sector 2</button>
            </div>

            <div className="pt-4 md:pt-2">
              <p className=" font-medium text-sm md:text-base">
                {post?.description}
              </p>

              <div className="flex justify-between pt-4">
                <div className="flex space-x-1 items-center">
                  <HeartUpIcon className="h-4 w-4 md:h-6 md:w-6 text-red-500" />
                  <span className="text-xs md:text-sm font-medium">
                    {post.likes}
                  </span>
                </div>
                <div className="flex space-x-1 items-center">
                  <EyeIcon className="h-4 w-4 md:h-6 md:w-6 text-black" />
                  <span className="text-xs md:text-sm font-medium">
                    {post?.views}
                  </span>
                </div>
                <div className="flex space-x-1 items-center">
                  <ChatBubbleLeftIcon className="h-4 w-4 md:h-6 md:w-6 text-black" />
                  <span className="text-xs md:text-sm font-medium">
                    {post?.comments} comments
                  </span>
                </div>
                <div className="flex space-x-1 items-center">
                  <ShareIcon className="h-4 w-4 md:h-6 md:w-6 text-black" />
                  <span className="text-xs md:text-sm font-medium">Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
