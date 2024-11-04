import Nav from "./components/Nav";
import Logo from "./components/Logo";
import Button from "./components/Button";
import "../app/globals.css";

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <div className=" bg-indigo-950">
          <div className="container mx-5 flex items-center py-5 h-15">
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
          <div className="flex mx-5">
            <div className="w-3/6">
              <h1 className="text-white">
                Bangun dan Wujudkan Cita Bersama EDUFREE
              </h1>
              <p className="text-white">
                EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
                online yang bertujuan untuk membantu kamu meraih cita di bidang
                teknologi.
              </p>
              <Button variant="btn-yellow">Lihat Kursus</Button>
            </div>
            <div className="w-3/6">
              <img src="./hero.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
