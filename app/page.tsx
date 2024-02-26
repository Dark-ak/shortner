import Body from "@/components/Body";
import Boost from "@/components/Boost";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Image from "next/image";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Nav />
      <Hero />
      <Body />
      <Boost />
    </main>
  );
}
