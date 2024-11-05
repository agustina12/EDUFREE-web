import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBrand from "./components/SectionBrand";
import Sectionjoin from "./components/SectionJoin";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <div className="w-screen ">
        <div className=" bg-indigo-950">
          <Navbar />
          <div className="mx-16 pt-20">
            <Hero />
          </div>
        </div>
        <div className="bg-slate-100">
          <div className="mx-16 py-16">
            <SectionBrand />
          </div>
        </div>
        <div className="mx-16 my-10">
          <Sectionjoin />
        </div>
      </div>
    </>
  );
}
