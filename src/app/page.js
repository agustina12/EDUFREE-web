import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBrand from "./components/SectionBrand";
import SectionJoin from "./components/SectionJoin";
import SectionAbout from "./components/SectionAbout";
import SectionRecommend from "./components/SectionRecommend";
import SectionTestimonial from "./components/SectionTestimonial";
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
          <SectionJoin />
        </div>
        <div className="mx-16 my-24">
          <SectionAbout />
        </div>
        <div className="mx-16 my-24">
          <SectionRecommend />
        </div>
        <div className="bg-slate-100">
          <div className="mx-16 my-24">
            <SectionTestimonial />
          </div>
        </div>
      </div>
    </>
  );
}
