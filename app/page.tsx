import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <FaHome />
            }
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
