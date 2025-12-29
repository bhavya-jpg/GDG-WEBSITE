import Footer from "@/components/app/footer";
import SectionOne from "@/components/app/home/sections/section-one";
import SectionFive from "@/components/app/home/sections/SectionFive";
import SectionFour from "@/components/app/home/sections/SectionFour";
import SectionThree from "@/components/app/home/sections/SectionThree";
import SectionTwo from "@/components/app/home/sections/SectionTwo";
import Navbar from "@/components/app/navbar/navbar";

export default function Home() {
  return (
    // Outer-most container (NO ANIMATIONS HERE)
    <div className="relative min-h-screen bg-[#030303]">
      
      {/* 1. Navbar is at the top level, outside main */}
      <Navbar /> 

      {/* 2. Main content goes here */}
      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />

        
        {/* ... other sections ... */}
      </main>

      <Footer />
    </div>
  );
}