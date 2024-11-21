import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center gap-5 pt-32 text-gray-200">
      <h2 className="text-6xl font-semibold">Todas las apps</h2>
      <span className="text-5xl font-semibold">en un solo lugar</span>
      <p className="flex text-center leading-relaxed">
      Aquí encontraras todas las aplicaciones <br/> que iré creando a lo largo de mi aprendizaje. <br/> Haz click en tu aplicación preferida  y disfrutala.
      </p>
      <Link
        href="#card-collection"
        className="mt-8"
      >
        <Image
          src={"/svgs/downArrow.svg"}
          width={50}
          height={50}
          alt="down arrow icon"
        />
      </Link>
    </section>
  );
};

export default Hero;
