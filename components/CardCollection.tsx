import React from "react";
import AppCard from "./AppCard";
import { links } from "@/constants";

const CardCollection = () => {
  return (
    <section id="card-collection" className="flex gap-6 justify-center flex-wrap sm:justify-normal">
      {links.map(({ url, id, image, description, title }) => (
        <AppCard
          key={id}
          image={image}
          description={description}
          title={title}
          url={url}
        />
      ))}
    </section>
  );
};

export default CardCollection;
