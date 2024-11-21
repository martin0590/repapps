import CardCollection from "@/components/CardCollection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="px-6">
      <Hero />
      <CardCollection />
    </div>
  );
}
