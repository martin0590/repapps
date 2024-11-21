import { AppCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppCard = ({ url, title, image, description }: AppCardProps) => {
  return (
    <div className="w-[250px] flex flex-col gap-2 text-gray-200 rounded-lg group p-2 hover:outline outline-1 outline-gray-300">
      <Link href={url!} target="_blank">
        <Image
          src={image}
          alt={`app ${title} image`}
          width={250}
          height={250}
          className="object-cover"
        />
        <h3 className="text-xl font-semibold group-hover:underline">{title}</h3>
        <p className="mt-4">{description}</p>
      </Link>
    </div>
  );
};

export default AppCard;
