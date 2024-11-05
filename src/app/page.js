import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Button from "./components/Button";
import Paragraph from "./components/Paragraph";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <div className="w-screen ">
        {/* navigation */}
        <div className=" bg-indigo-950">
          <div className="mx-16 flex items-center py-5 h-20">
            <div className="w-2/5">
              <Logo />
            </div>
            <div className="w-3/5">
              <div className="flex items-center justify-end">
                <Nav />
                <Button variant="outline-white">Login</Button>
              </div>
            </div>
          </div>
          <div className="flex mx-16 my-20">
            <div className="w-3/6 ">
              <h1 className="text-white text-5xl font-semibold leading-normal">
                Bangun dan Wujudkan Cita Bersama EDUFREE
              </h1>
              <Paragraph />
              <div className="flex gap-6">
                <Button variant="btn-yellow">Lihat Kursus</Button>
                <div className="flex items-center gap-2">
                  <a href="#" className="text-white text-base">
                    Lihat Alur belajar
                  </a>
                  <img src="./arrow.svg" className="w-5 text-white" />
                </div>
              </div>
            </div>
            <div className="w-3/6 flex justify-center mb-14">
              <img src="./hero.png" />
            </div>
          </div>
        </div>
        {/* brand logo*/}
        <div className="mx-16 my-20">
          <div className="flex">
            <div className="">
              <h4 className="text-2xl font-semibold text-indigo-950">
                21.000+
              </h4>
              <p className="text-base text-indigo-950 font-normal">
                Siswa terdaftar
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
