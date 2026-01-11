"use client";

import dynamic from 'next/dynamic';
import { navItems } from "@/data";

// Componentes estáticos o simples se pueden quedar igual
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

// Componentes que usan Lottie, Canvas, Three.js o animaciones complejas
// Los cargamos con ssr: false para que no rompan el build de Vercel
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;