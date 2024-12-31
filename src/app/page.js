import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionBrand from "./components/SectionBrand";
import SectionJoin from "./components/SectionJoin";
import SectionAbout from "./components/SectionAbout";
import SectionRecommend from "./components/SectionRecommend";
import SectionTestimonial from "./components/SectionTestimonial";
import SectionFaq from "./components/SectionFaq";
import SectionContactUs from "./components/SectionContactUs";
import "../app/globals.css";
import SectionBlog from "./components/SectionBlog";
import SectionFooter from "./components/SectionFooter";

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
        <div className="mx-16 my-24">
          <SectionFaq />
        </div>
        <div className="mx-16 my-24">
          <SectionContactUs />
        </div>
        <div className="mx-16 my-24">
          <SectionBlog />
        </div>
        <div className="mx-16 my-24">
          <SectionFooter />
        </div>
      </div>
    </>
  );
}
